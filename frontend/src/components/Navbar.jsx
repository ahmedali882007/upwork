import React, { useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi"; // Added PiXBold import
import Sidebar from "./Sidebar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex p-5 relative z-100 justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Toggle between PiListBold and PiXBold based on show state */}
          {show ? (
            <PiXBold
              onClick={() => setShow(false)} // Close sidebar
              size={30}
              cursor={"pointer"}
              className="lg:hidden"
            />
          ) : (
            <PiListBold
              onClick={() => setShow(true)} // Open sidebar
              size={30}
              cursor={"pointer"}
              className="lg:hidden"
            />
          )}

          <img width={80} height={80} src="/svgs/logo.svg" alt="" />
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
          <button className="cursor-pointer hidden lg:block bg-transparent">
            Log in
          </button>
          {show ? (
            <CiSearch size={30} cursor={"pointer"} />
          ) : (
            <Link to={"sign-up"}>
              <button className="lg:text-white lg:bg-green-700 bg-transparent px-5 py-2 font-semibold cursor-pointer rounded-xl hover:bg-green-600">
                Sign up
              </button>
            </Link>
          )}
        </div>
      </div>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
};

export default Navbar;
