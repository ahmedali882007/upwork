import React, { useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";
import Sidebar from "./Sidebar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <>
      <div className="flex p-5 relative z-100 justify-between items-center">
        <div className="flex items-center gap-4">
          {show ? (
            <PiXBold
              onClick={() => setShow(false)}
              size={30}
              cursor={"pointer"}
              className="lg:hidden"
            />
          ) : (
            <PiListBold
              onClick={() => setShow(true)}
              size={30}
              cursor={"pointer"}
              className="lg:hidden"
            />
          )}

          <img width={80} height={80} src="/svgs/logo.svg" alt="logo" />
          <ul className="hidden lg:flex gap-4 text-sm">
            <li className="cursor-pointer">Find Talent</li>
            <li className="cursor-pointer">Find Work</li>
            <li className="cursor-pointer">Why Upwork</li>
            <li className="cursor-pointer">What's New</li>
            <li className="cursor-pointer">Enterprise</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Find Talent</li>
          </ul>
        </div>

        <div className="flex gap-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hidden lg:block bg-red-600 text-white px-5 py-2 font-semibold rounded-xl hover:bg-red-700"
            >
              Log out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  onClick={handleLogin} // demo login trigger
                  className="cursor-pointer hidden lg:block bg-transparent"
                >
                  Log in
                </button>
              </Link>
              {!show && (
                <Link to="/sign-up">
                  <button className="lg:text-white lg:bg-green-700 bg-transparent px-5 py-2 font-semibold cursor-pointer rounded-xl hover:bg-green-600">
                    Sign up
                  </button>
                </Link>
              )}
            </>
          )}

          {show && <CiSearch size={30} cursor={"pointer"} />}
        </div>
      </div>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
};

export default Navbar;
