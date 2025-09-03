import TextField from "@mui/material/TextField";
import React, { useEffect, useMemo, useState } from "react";
import { IoLogoApple } from "react-icons/io";
import countryList from "react-select-country-list";
import Select from "react-select";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { regUser, userReset } from "../features/auth/authSlice";

const SecondSignUpScreen = ({ role }) => {
  const [formFields, setFormFields] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    mails: false,
    terms: true,
  });

  const [loading, setLoading] = useState(false);

  const { f_name, l_name, email, password, mails, terms } = formFields;

  const [country, setCountry] = useState("");

  const { userLoading, userSuccess, userError, userMessage, user } =
    useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      navigate("/otp-verification");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleRegister = async () => {
    // setLoading(true);
    // try {
    //   let response = await axios.post(
    //     "http://localhost:5174/api/users/register-user",
    //     {
    //       f_name,
    //       l_name,
    //       email,
    //       password,
    //       mails,
    //       terms,
    //       role,
    //       country,
    //     }
    //   );
    //   localStorage.setItem("user", JSON.stringify(response.data));
    //   navigate("/otp-verification");
    //   console.log(response.data);
    // } catch (error) {
    //   toast.error(error.response?.data?.message);
    //   // console.log(error.response.data.message);
    // }
    // setLoading(false);
    dispatch(
      regUser({ f_name, l_name, email, password, mails, terms, role, country })
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg">
        {/* Top Bar: Logo + Apply as Talent */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-1 text-sm">
            <span>Looking for work?</span>
            <a href="#" className="text-green-600 font-medium hover:underline">
              Apply as talent
            </a>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-medium mb-6 text-center">
          Sign up to hire talent
        </h2>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-4">
          <button className="border cursor-pointer hover:bg-gray-100 border-gray-300 rounded-full px-4 py-2 flex items-center justify-center w-1/2 ">
            <span className="mr-2">
              <IoLogoApple />
            </span>{" "}
            Continue with Apple
          </button>
          <button className="border cursor-pointer hover:bg-gray-100 border-gray-300 rounded-full px-4 py-2 flex items-center justify-center w-1/2 ">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <TextField
                value={f_name}
                onChange={handleChange}
                name="f_name"
                className="w-[100%]"
                id="outlined-basic"
                label="First name"
                variant="outlined"
              />
            </div>
            <div className="flex-1">
              <TextField
                value={l_name}
                onChange={handleChange}
                name="l_name"
                className="w-[100%]"
                id="outlined-basic"
                label="Last name"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <TextField
              value={email}
              onChange={handleChange}
              name="email"
              className="w-full"
              id="outlined-basic"
              label="Work email address"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={password}
              onChange={handleChange}
              name="password"
              className="w-full"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Password (8 or more characters)"
            />
          </div>
          <label className="block text-sm mb-1">Country</label>
          <ReactFlagsSelect
            value={country}
            onSelect={(code) => setCountry(code)}
          />

          {/* Checkbox 1 */}
          <label className="flex items-start space-x-2 text-sm">
            <input type="checkbox" defaultChecked className="mt-1" />
            <span>
              Send me emails with tips on how to find talent that fits my needs.
            </span>
          </label>
          {/* Checkbox 2 */}
          <label className="flex items-start space-x-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <span>
              Yes, I understand and agree to the{" "}
              <a href="#" className="text-green-600 hover:underline">
                Upwork Terms of Service
              </a>
              , including the{" "}
              <a href="#" className="text-green-600 hover:underline">
                User Agreement
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {/* Button */}
          <button
            disabled={userLoading}
            onClick={handleRegister}
            type="button"
            className={`w-full ${
              userLoading ? "bg-gray-200" : "bg-green-600 hover:bg-green-700 "
            } cursor-pointer flex gap-2 justify-center items-center text-white py-2 rounded-md `}
          >
            {userLoading ? (
              <>
                <ClipLoader size={20} color="white" />
                Creating Account
              </>
            ) : (
              "Create my account"
            )}
          </button>
          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <a href="#" className="text-green-600 hover:underline">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SecondSignUpScreen;
