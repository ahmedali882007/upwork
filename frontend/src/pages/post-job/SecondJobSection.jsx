import React, { useEffect, useState } from "react";
import MainNav from "../../components/MainNav";
import { TextField } from "@mui/material";
import JobFooter from "../../components/client/JobFooter";
import { BsExclamationCircle } from "react-icons/bs";

const SecondJobSection = () => {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({
    required: false,
    minLength: false,
  });

  const { required, minLength } = errors;

  // useEffect(() => {}, [title]);

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (!title) {
      setErrors({ required: true, minLength: false });
    } else if (title.length < 3) {
      setErrors({ ...errors, required: false, minLength: true });
    } else {
      setErrors({ required: false, minLength: false });
    }
  };

  return (
    <>
      <MainNav />
      <div className="w-[90%] py-5 side_padding  gap-4 container mx-auto xl:w-[70%] lg:w-[85%] grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12">
          <p className="text-gray-500 flex gap-4 text-sm">1/5 Job post</p>
          <h2>Let's start with a strong title</h2>
          <p className="text-gray-800 my-4 ">
            This helps your job post stand out to the right candidates. It's the
            first thing they'll see, so make it count!
          </p>
        </div>
        <div className="lg:col-span-6 col-span-12 flex gap-3 flex-col ">
          <h4 className="text-semibold">Write a title for your job post</h4>
          <TextField
            value={title}
            onChange={handleChange}
            placeholder="e.g. Create a React App..."
            className="w-full"
            label="Title"
          />
          {required && (
            <p className="text-red-500 font-semibold text-sm flex gap-2 items-center">
              <BsExclamationCircle />
              Title is required
            </p>
          )}
          {minLength && (
            <p className="text-red-500 font-semibold text-sm flex gap-2 items-center">
              <BsExclamationCircle />
              minimum length should be 3
            </p>
          )}
          <h4 className="text-md font-semibold ">Example titles</h4>
          <ul className="list-disc ms-4 ">
            <li>
              Build responsive WordPress site with booking/payment functionality
            </li>
            <li>
              Graphic designer needed to design ad creative for multiple
              compaigns
            </li>
            <li>Facebook ad specialist needed for product launch</li>
          </ul>
        </div>
      </div>
      <JobFooter width="w-1/5" />
    </>
  );
};

export default SecondJobSection;
