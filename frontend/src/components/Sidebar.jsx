import React from "react";
import { sidebarData } from "../data/SidebarData";

const Sidebar = ({ show, setShow }) => {
  return (
    <>
      <div
        className={`min-h-screen ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 bg-white top-0 w-full z-50 fixed`}
      >
        <ul className="unstyled mt-15 flex flex-col ">
          {sidebarData?.map((item, index) => {
            return (
              <li key={item.id} className="flex justify-between py-8 px-5 ">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
