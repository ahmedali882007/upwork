import React, { useState } from "react";
import { FaRegCircle, FaUserTie } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
import SecondSignUpScreen from "./SecondSignUpScreen";

const FirstSignupScreen = () => {
  const [role, setRole] = useState("");
  const [secondScreen, setSecondScreen] = useState(false);

  return (
    <>
      <nav className="flex p-7">
        <img src="/svgs/logo.svg" height={80} width={80} alt="" />
      </nav>

      {secondScreen ? (
        <SecondSignUpScreen role={role} />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-10 mx-auto w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
            <h1 className="text-center py-3 text-4xl">
              Join as a client or freelancer
            </h1>

            <div className="flex gap-5">
              <div
                onClick={() => setRole("client")}
                className="border cursor-pointer active:scale-95 transition-all hover:border-gray-900 hover:bg-gray-100 border-gray-500 rounded-md p-5"
              >
                <div className="flex justify-between items-center  ">
                  <FaUserTie size={20} />
                  <Radio
                    checked={role == "client"}
                    value={role}
                    onChange={(e) => setRole("client")}
                    name="role"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                </div>
                <h2 className="text-2xl font-semibold">
                  I'm a client, hiring for a project
                </h2>
              </div>
              <div
                onClick={() => setRole("freelancer")}
                className="border active:scale-95 transition-all cursor-pointer hover:border-gray-900 hover:bg-gray-100 border-gray-500 rounded-md p-5"
              >
                <div className="flex justify-between items-center  ">
                  <FaUserTie size={20} />
                  <Radio
                    checked={role == "freelancer"}
                    value={role}
                    onChange={(e) => setRole("freelancer")}
                    name="role"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                </div>
                <h2 className="text-2xl font-semibold">
                  I'm a freelancer, looking for work
                </h2>
              </div>
            </div>
            <button
              disabled={!role}
              onClick={() => setSecondScreen(true)}
              className={`px-5 py-3 ${
                role
                  ? "bg-green-700 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }  font-semibold rounded-md text-white`}
            >
              {role == ""
                ? "Create Account"
                : role == "client"
                ? "Join as a Client"
                : "Apply as a Freelancer"}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default FirstSignupScreen;
