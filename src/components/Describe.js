import React, { useState } from "react";

import icons from "../constant/icons.js";
const Describe = ({ nextPage }) => {
  const [disable, setDisable] = useState(true);
  return (
    <>
      <div className="text-left sm:text-center md:text-right lg:text-justify xl:text-center pb-14">
        <h1
          className="font-semibold text-3xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
          style={{ color: "rgb(55, 53, 47)" }}
        >
          Which describes you best?
        </h1>
        <span className="text-md opacity-70">
          This will help us personalize your experience.
        </span>
      </div>
      {/* Student */}
      <div className="relative">
        <input
          type="radio"
          name="user"
          id="student"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="student"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.student}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">
              Student{" "}
              <span className="text-lg opacity-60">or soon to be enrolled</span>
            </h6>
          </div>
        </label>
        {/* <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div> */}
      </div>
      {/* Professional */}
      <div className="relative ">
        <input
          type="radio"
          name="user"
          id="professional"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="professional"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.professional}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">
              Professional{" "}
              <span className="text-lg opacity-60">pursuing a career</span>
            </h6>
          </div>
        </label>
        {/* <div className=" flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div> */}
      </div>
      {/* Parent */}
      <div className="relative ">
        <input
          type="radio"
          name="user"
          id="parent"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="parent"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.parents}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">
              Parent{" "}
              <span className="text-lg opacity-60">of a school-aged child</span>
            </h6>
          </div>
        </label>
        {/* <div className=" flex absolute transition delay-100"></div> */}
      </div>
      {/* Life long learner */}
      <div className="relative">
        <input
          type="radio"
          name="user"
          id="lllearner"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="lllearner"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.learner}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">Life Long Learner </h6>
          </div>
        </label>
        <div className=" flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div>
      </div>
      {/* other*/}
      <div className="relative">
        <input
          type="radio"
          name="user"
          id="other"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="other"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.other}
            alt=""
            className="w-10 h-10 object-cover rounded full "
          />
          <div>
            <h6 className="text-xl mt-2">Other</h6>
          </div>
        </label>
        <div className=" flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div>
      </div>

      <div className=" flex justify-center items-center">
        <button
          disabled={disable}
          type="button"
          className={` justify-center text-white ${
            disable === true ? "bg-gray-300" : "bg-black"
          }
  font-large rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2 flex `}
          onClick={nextPage}
        >
          <span className="ml-2 ">Continue</span>
        </button>
      </div>
    </>
  );
};

export default Describe;
