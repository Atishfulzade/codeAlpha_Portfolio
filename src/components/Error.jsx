import React from "react";
import { errorImage } from "../assets";

const Error = () => {
  return (
    <div className="  bg-primary flex-col h-screen flex justify-center md:flex-row items-center w-full">
      <img
        src={errorImage}
        alt="404 Page not found"
        className="object-contain mt-10 w-[400px] md:w-[600px] "
      />
      <div className="flex flex-col gap-8">
        <h1 className="text-[16px]">Page you are looking for is found...!</h1>
        <button className="bg-tertiary py-3 px-8 outline-none border-none font-semibold text-white shadow-lg w-fit shadow-primary rounded-lg">
          Return to home page
        </button>
      </div>
    </div>
  );
};

export default Error;
