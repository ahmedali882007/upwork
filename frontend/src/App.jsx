import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstSignupScreen from "./components/FirstSignupScreen";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<FirstSignupScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
