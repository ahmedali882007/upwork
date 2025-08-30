import nodemailer from "nodemailer";
import { userModel } from "../models/userModel.js";

export const sendOTP = (email, otp) => {
  // send otp --> mail
  // configuration

  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ahmedali882007@gmail.com",
      pass: "myqcolvxtffsborj",
    },
  });

  // options
  let options = {
    subject: "OTP Verification",
    from: "ahmedali882007@gmail.com",
    to: email,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #e5e7eb;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    .header {
      background: linear-gradient(135deg, #7c3aed, #db2777);
      padding: 30px 20px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
      animation: pulse 8s infinite;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      position: relative;
      z-index: 1;
    }
    .content {
      padding: 32px 24px;
      text-align: center;
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
    }
    .otp {
      font-size: 32px;
      font-weight: 800;
      color: #1f2937;
      letter-spacing: 5px;
      margin: 20px 0;
      padding: 12px 28px;
      background: linear-gradient(45deg, #f3e8ff, #fce7f3);
      border-radius: 10px;
      display: inline-block;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    .otp:hover {
      transform: scale(1.05);
    }
    .content p {
      color: #374151;
      font-size: 15px;
      line-height: 1.6;
      margin: 10px 0;
      font-weight: 400;
    }
    .button {
      display: inline-block;
      padding: 12px 32px;
      background: linear-gradient(90deg, #7c3aed, #db2777);
      color: #ffffff;
      text-decoration: none;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 600;
      margin: 20px 0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }
    .footer {
      background: linear-gradient(to top, #f3e8ff, #ffffff);
      padding: 16px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
      border-top: 1px solid #e5e7eb;
    }
    .footer a {
      color: #7c3aed;
      text-decoration: none;
      font-weight: 500;
      margin: 0 6px;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.2); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0.5; }
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100%;
        margin: 0;
        border-radius: 0;
      }
      .header {
        padding: 24px 16px;
      }
      .header h1 {
        font-size: 20px;
      }
      .content {
        padding: 20px 16px;
      }
      .otp {
        font-size: 26px;
        letter-spacing: 3px;
        padding: 10px 20px;
      }
      .button {
        padding: 10px 24px;
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Verify Your Account</h1>
    </div>
    <div class="content">
      <p>Hi,</p>
      <p>Use this OTP to verify your account:</p>
      <div class="otp"> ${otp} </div>
      <p>Valid for 10 minutes. Don’t share it.</p>
      <a href="https://yourwebsite.com/verify" class="button">Verify Now</a>
      <p>Not you? <a href="https://yourwebsite.com/support">Contact support</a>.</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
      <p>
        <a href="https://yourwebsite.com/support">Support</a> |
        <a href="https://yourwebsite.com/privacy">Privacy</a> |
        <a href="https://yourwebsite.com/terms">Terms</a>
      </p>
    </div>
  </div>
</body>
</html>`,
  };

  let mail = transport.sendMail(options, (err, info) => {
    try {
      console.log("mail sent successfully");
    } catch (error) {
      console.log(error);
    }
  });

  setTimeout(async () => {
    let user = await userModel.findOne({ email });

    if (!user) {
      res.status(404);
      throw new Error("Invalid Email");
    }

    user.otp = null;
    await user.save();
  }, 60000);
};
