import React from "react";
import MainNav from "../components/MainNav";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Work = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <MainNav />
      <div className="flex container mx-auto justify-between items-center">
        <h1 className="text-2xl">Good afternoon, {user?.f_name}</h1>

        <Link to={"/first-job-section"}>
          <Button
            className="flex gap-2"
            sx={{ background: "oklch(62.7% 0.194 149.214)" }}
            variant="contained"
          >
            <GoPlus size={20} />
            Post a Job
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Work;
