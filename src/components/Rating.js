import React from "react";
import cheering from "../assets/images/cheering.svg";
import icons from "../constant/icons";
const Rating = ({ nextPage, prevPage }) => {
  return (
    <>
      <div style={{ marginBottom: "30%" }}>
        <div className="flex flex-col md:flex-row items-center h-auto max-w-full">
          <div className="mr-3">
            <img src={cheering} alt="Measure image" />
          </div>
          <div className=" md:w-1/1 md:ml-10 ">
            <div className="text-left sm:text-left md:text-left lg:text-justify xl:text-left pb-14">
              <h1
                className="font-bold text-xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
                style={{ color: "rgb(55, 53, 47)" }}
              >
                You're on your way!
              </h1>
              <div className="flex flex-wrap  items-center mb-4  ">
                <img
                  src={icons.star}
                  alt=""
                  className="w-10 h-10 object-cover rounded full  mx-1"
                />
                <img
                  src={icons.star}
                  alt=""
                  className="w-10 h-10 object-cover rounded full mx-1"
                />
                <img
                  src={icons.star}
                  alt=""
                  className="w-10 h-10 object-cover rounded full mx-1"
                />
                <img
                  src={icons.star}
                  alt=""
                  className="w-10 h-10 object-cover rounded full mx-1"
                />
                <img
                  src={icons.star}
                  alt=""
                  className="w-10 h-10 object-cover rounded full mx-1"
                />
              </div>
              <span className=" italic text-md  opacity-70 py-2">
                "Through its engaging and well-structured courses, Brilliant has
                taught me mathematical concepts that I previously struggled to
                understand. I now feel confident approaching both technical job
                interviews and real world problem solving situations."
              </span>
              <h1 className="italic mt-3"> - Jacob S.</h1>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center ">
          <button
            type="button"
            className={` justify-center text-white 
      bg-black font-large rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2 flex`}
            onClick={nextPage}
            style={{ marginTop: "19%" }}
          >
            <span className="ml-2 ">Continue</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Rating;
