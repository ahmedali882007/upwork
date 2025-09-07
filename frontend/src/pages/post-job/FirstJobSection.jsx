import React, { useContext, useState } from "react";
import MainNav from "../../components/MainNav";
import { JobContext } from "../../context/JobContext";
import { FaCalendar } from "react-icons/fa6";

const FirstJobSection = () => {
  // const data = useContext(JobContext);
  // console.log(data);
  const [checked, setChecked] = useState("");
  const [projectType, setProjectType] = useState("");

  return (
    <>
      <MainNav />
      <div className="flex flex-col w-[90%] side_padding justify-center gap-4 container mx-auto xl:w-[70%] lg:w-[85%] md:flex-row md:justify-between ">
        <h1 className="text-2xl w-full md:w-[30%]">
          How can we help you get started?
        </h1>
        <ul className="flex flex-col unstyled w-full md:w-[70%] ">
          <li>
            I want to create a new job
            <div className="flex my-3 gap-2">
              {/* Option 1 */}
              <label
                onClick={() => setChecked("long-term")}
                htmlFor="type1"
                className={`${
                  checked == "long-term"
                    ? "border-black outline-1"
                    : "border-gray-300"
                }  flex rounded-md hover:border-black  py-6 gap-3 border-2 p-4 active:scale-98 cursor-pointer`}
              >
                <div className="rounded-md">
                  <div className="flex">
                    <div>
                      <FaCalendar />
                      <h2 className="text-xl">Long term project</h2>
                      <p className="text-gray-600">
                        More than thirty hours a week and/or will be longer than
                        3 months
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  value={"long-term"}
                  onChange={(e) => setProjectType(e.target.value)}
                  id="type1"
                  type="radio"
                  name="type"
                  className="h-[30px] w-[30px]"
                />
              </label>

              {/* Option 2 */}
              <label
                onClick={() => setChecked("short-term")}
                htmlFor="type2"
                className={`${
                  checked == "short-term"
                    ? "border-black outline-1"
                    : "border-gray-300"
                }  flex rounded-md hover:border-black  py-6 gap-3 border-2 p-4 active:scale-98 cursor-pointer`}
              >
                <div className="rounded-md">
                  <div className="flex">
                    <div>
                      <FaCalendar />
                      <h2 className="text-xl">Short term project</h2>
                      <p className="text-gray-600">
                        Less than 30 hours a week or will be shorter than 3
                        months
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  value={"short-term"}
                  onChange={(e) => setProjectType(e.target.value)}
                  id="type2"
                  type="radio"
                  name="type"
                  className="h-[30px] w-[30px]"
                />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FirstJobSection;
