import React, { useState } from "react";
import { mainNavData } from "../data/main-nav-data";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { PiLineVerticalThin } from "react-icons/pi";

const MainNav = () => {
  const [focusVal, setFocusVal] = useState();
  return (
    <>
      <div className="flex justify-between items-center px-4 py-5 ">
        <div className="flex justify-center items-center gap-5">
          <img src="/svgs/logo.svg" height={80} width={80} alt="" />
          <ul className="flex items-center justify-center gap-4 cursor-pointer ">
            {mainNavData?.map((item, index) => {
              return (
                <li
                  className="relative  hover:text-green-500 flex items-center group"
                  key={index}
                >
                  {item?.title}
                  {item?.list && (
                    <RiArrowDropDownLine
                      size={20}
                      className="transition-all duration-300 group-hover:rotate-180 "
                    />
                  )}
                  {item?.list && (
                    <ul className="absolute top-[40px] group-hover:text-black hidden rounded-lg nested-ul w-64 group-hover:flex shadow border border-gray-200  flex-col bg-white px-4 py-4 gap-2 ">
                      {item?.list?.map((item2, index2) => {
                        return <li key={index2}>{item2?.title} </li>;
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex border-gray-400 items-center rounded-md justify-center gap-3">
          <div
            onClick={() => setFocusVal("input")}
            className={`flex p-2 border ${
              focusVal == "input" && "border border-gray-800 rounded-md"
            } relative items-center justify-center gap-2`}
          >
            <GoSearch />
            <input
              type="text"
              className="border-0 outline-0"
              placeholder="Search"
            />
            <PiLineVerticalThin size={20} />

            <button
              onClick={() => setFocusVal("button")}
              className="cursor-pointer flex items-center justify-center gap-1"
            >
              Jobs
              <RiArrowDropDownLine />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
