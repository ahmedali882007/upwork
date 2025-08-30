import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstSignupScreen from "./components/FirstSignupScreen";
import { Toaster } from "react-hot-toast";
import OtpVerification from "./components/OTP";
import Work from "./pages/Work";

const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<FirstSignupScreen />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
