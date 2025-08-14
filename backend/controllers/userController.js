import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import otpGenerator from "otp-generator";
import { sendOTP } from "../extras/sendOTP.js";

export const registerUser = async (req, res) => {
  // get data from frontend
  const { role, f_name, l_name, email, password, country, mails, terms } =
    req.body;

  // check if fields are empty or other wise
  if (!role || !f_name || !l_name || !email || !password || !country) {
    res.status(400);
    throw new Error("Please enter all values to proceed");
  }

  // check if email exists or not

  let isUserPresent = await userModel.findOne({ email });

  if (isUserPresent) {
    res.status(401);
    throw new Error("Email already exists!");
  }

  // encrypt the password
  let hashedPassword = await bcrypt.hash(password, 10);

  // generate the otp
  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
    digits: true,
  });

  // send mail
  sendOTP(email, otp);

  let createdUser = await userModel.create({
    role,
    f_name,
    l_name,
    email,
    password: hashedPassword,
    country,
    mails,
    terms,
    otp,
  });

  res.send(createdUser);
};
