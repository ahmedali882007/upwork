import React, { useContext, useState } from "react";
import MainNav from "../../components/MainNav";
import { JobContext } from "../../context/JobContext";
import { FaCalendar } from "react-icons/fa6";
import { Button, MenuItem, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FirstJobSection = () => {
  // const data = useContext(JobContext);
  // console.log(data);
  const [checked, setChecked] = useState("");
  const [projectType, setProjectType] = useState("");
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    // alert(id);
    setOpen(open == id ? null : id);
  };

  const navigate = useNavigate();

  return (
    <>
      <MainNav />
      <div className="flex flex-col select-none w-[90%] side_padding justify-center gap-4 container mx-auto xl:w-[70%] lg:w-[85%] md:flex-row md:justify-between ">
        <h1 className="text-2xl w-full md:w-[30%]">
          How can we help you get started?
        </h1>
        <ul className="flex flex-col gap-4 unstyled w-full md:w-[70%] ">
          <li
            onClick={() => handleOpen(1)}
            className="text-xl cursor-pointer overflow-hidden"
          >
            I want to create a new job
            <div
              className={`flex ${
                open == 1 ? "visible h-[150px] my-3 " : "h-0 invisible "
              }  transition-all duration-300 text-sm gap-2`}
            >
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
          <li onClick={() => handleOpen(2)} className="text-xl cursor-pointer">
            I want to continue editing a draft
            <div
              onClick={(e) => e.stopPropagation()}
              className={`w-full transition-all duration-300 ${
                open == 2 ? "visible h-[50px] " : "h-0 invisible"
              } `}
            >
              <TextField select fullWidth>
                <MenuItem>Testing</MenuItem>
              </TextField>
            </div>
          </li>
          <li
            onClick={(e) => {
              handleOpen(3);
              e.stopPropagation();
            }}
            className="text-xl cursor-pointer"
          >
            I want to rework a previous job post
            <div
              className={`w-full transition-all duration-300 ${
                open == 3 ? "visible h-[50px] " : "h-0 invisible"
              }`}
            >
              <TextField select fullWidth>
                <MenuItem>Testing</MenuItem>
              </TextField>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center mx-auto gap-3 w-[90%] lg:w-[85%] xl:w-[70%] justify-end ">
        <Button
          style={{ color: "oklch(62.7% 0.194 149.214)" }}
          className="text-green-500"
        >
          Cancel
        </Button>

        <Button
          onClick={() => navigate("/second-job-section")}
          disabled={!projectType}
          style={{
            background: projectType ? "oklch(62.7% 0.194 149.214)" : "#ccc",
          }}
          className="bg-green-600"
          variant="contained"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default FirstJobSection;
