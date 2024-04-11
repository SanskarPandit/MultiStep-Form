import React, { useState } from "react";
import fraction from "../assets/images/fracticon.png";
import calculus from "../assets/images/calculus.png";
import integration from "../assets/images/integration.png";
import quadratic from "../assets/images/quadratic.png";
const Maths = ({ nextPage }) => {
  const [disable, setDisable] = useState(true);
  return (
    <>
      {" "}
      <div className="pb-24">
        <div className=" text-center pt-4 pb-20">
          <h1
            className=" mb-lg font-semibold text-3xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
            style={{ color: "rgb(55, 53, 47)" }}
          >
            What is your maths comfort level?
          </h1>
          <span className="text-md ">
            Choose the highest level you feel confident in - you can always
            adjust later
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {/* Card 1 */}
          <div className=" mb-2 max-w-xs">
            <input
              type="radio"
              name="user"
              id="arithmetic"
              className="hidden peer"
              onChange={() => {
                setDisable(false);
              }}
            />
            <label
              for="arithmetic"
              className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
            >
              <div className="bg-white rounded-md overflow-hidden w-full pt-4 ">
                {/* Card Content */}
                <img
                  src={fraction}
                  alt="Card 1"
                  className="w-full  object-cover pb-6"
                />
                <div className="mt-2 pt-2 ">
                  <h3 className="text-center text-xl font-bold">Arithmetic</h3>
                  <p className=" text-center opacity-70">Introductory</p>
                </div>
              </div>
            </label>
          </div>

          <div className=" max-w-xs">
            <input
              type="radio"
              name="user"
              id="bsalgebra"
              className="hidden peer"
              onChange={() => {
                setDisable(false);
              }}
            />
            <label
              for="bsalgebra"
              className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
            >
              <div className="bg-white  rounded-md overflow-hidden w-full  ">
                <img
                  src={integration}
                  alt="Card 1"
                  className="w-full  object-cover pb-6"
                />
                {/* Card Content */}
                <div className="mt-4 pt-4">
                  <h3 className="text-xl font-bold">Basic Algebra</h3>
                  <p className=" text-center opacity-70">Foundational</p>
                </div>
              </div>
            </label>
          </div>

          <div className=" mb-4">
            <input
              type="radio"
              name="user"
              id="intalgebra"
              className="hidden peer"
              onChange={() => {
                setDisable(false);
              }}
            />
            <label
              for="intalgebra"
              className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
            >
              <div className="bg-white rounded-md overflow-hidden  pt-2 ">
                {/* Card Content */}
                <img
                  src={quadratic}
                  alt="Card 1"
                  className="w-full  object-cover pb-1"
                />
                <div className="mb-2 ">
                  <h3 className="text-center text-xl font-bold">
                    Intermediate Algebra
                  </h3>
                  <p className=" text-center opacity-70">Intermediate</p>
                </div>
              </div>
            </label>
          </div>

          <div className="relative max-w-xs ">
            <input
              type="radio"
              name="user"
              id="calculus"
              className="hidden peer"
              onChange={() => {
                setDisable(false);
              }}
            />
            <label
              for="calculus"
              className="flex gap-4 p-4 rounded-lg bg-white bg-opacity-90 border hover:shadow-lg peer-checked:border-yellow-500 peer-checked:shadow-xl cursor-pointer transition"
            >
              <div className="  bg-white   rounded-md overflow-hidden w-full">
                {/* Card Content */}
                <img
                  src={calculus}
                  alt="Card 1"
                  className="w-full  object-cover pb-8"
                />
                <div className="mt-2  ">
                  <h3 className="text-center text-xl font-bold">Calculus</h3>
                  <p className=" text-center opacity-70">Advanced</p>
                </div>
              </div>
            </label>
          </div>
          {/* Add more cards as needed */}
        </div>
        <div>
          <div className=" flex justify-center items-center mt-10">
            <button
              disabled={disable}
              type="button"
              className={` justify-center text-white   ${
                disable === true ? "bg-gray-300" : "bg-black"
              }
font-large rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2 flex  `}
              onClick={nextPage}
            >
              <span className="ml-2">Continue</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maths;
