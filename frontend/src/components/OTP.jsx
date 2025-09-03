import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const user = JSON.parse(localStorage.getItem("user"));
    const myOTP = user?.otp;

    if (otp.join("") === myOTP) {
      navigate("/work");
    } else {
      setError("Invalid OTP or OTP expired");
    }
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-6">
          Enter the 6-digit code sent to your email/phone
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="w-12 h-12 border rounded-lg text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition"
          >
            Verify OTP
          </button>
        </form>

        <p className="mt-4 text-gray-500">
          Didn’t receive code?{" "}
          <button className="text-blue-600 font-medium hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
