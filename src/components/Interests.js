import React, { useState } from "react";
import icons from "../constant/icons";

const Interests = ({ nextPage, prevPage }) => {
  const [disable, setDisable] = useState(true);
  return (
    <>
      <div className="text-left sm:text-center md:text-right lg:text-justify xl:text-center pb-14">
        <h1
          className="font-semibold text-3xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
          style={{ color: "rgb(55, 53, 47)" }}
        >
          Which are you most interested in?
        </h1>
        <span className="text-md opacity-70">
          Choose just one.This will help us get you started (but won't limit
          your experience)
        </span>
      </div>
      {/* Graph */}
      <div className="relative">
        <input
          type="radio"
          name="user"
          id="graph"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="graph"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.graph}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">
              Learning specific skills to advance my career
            </h6>
          </div>
        </label>
        {/* <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div> */}
      </div>
      {/* Explore */}
      <div className="relative ">
        <input
          type="radio"
          name="user"
          id="explore"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="explore"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.explore}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">
              Exploring new topics I'm interested in
            </h6>
          </div>
        </label>
        {/* <div className=" flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div> */}
      </div>
      {/* Foundation */}
      <div className="relative ">
        <input
          type="radio"
          name="user"
          id="foundation"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="foundation"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.foundation}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">Refreshing my math foundations</h6>
          </div>
        </label>
        {/* <div className=" flex absolute transition delay-100"></div> */}
      </div>
      {/* Target*/}
      <div className="relative">
        <input
          type="radio"
          name="user"
          id="target"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="target"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.target}
            alt=""
            className="w-10 h-10 object-cover rounded full"
          />
          <div>
            <h6 className="text-xl mt-2">Exercising my brain to stay sharp</h6>
          </div>
        </label>
        <div className=" flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 transition delay-100"></div>
      </div>
      {/* Something else*/}
      <div className="relative">
        <input
          type="radio"
          name="user"
          id="else"
          className="hidden peer"
          onChange={() => {
            setDisable(false);
          }}
        />
        <label
          for="else"
          className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
        >
          <img
            src={icons.eyes}
            alt=""
            className="w-10 h-10 object-cover rounded full "
          />
          <div>
            <h6 className="text-xl mt-2">Something else</h6>
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
          <span className="ml-2">Continue</span>
        </button>
      </div>
    </>
  );
};

export default Interests;
