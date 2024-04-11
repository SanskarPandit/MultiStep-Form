import React from "react";
import image from "../assets/images/measure.svg";
const RightPlace = ({ nextPage }) => {
  return (
    <>
      <div style={{ marginBottom: "52%" }}>
        <div className="flex flex-col md:flex-row items-center h-auto max-w-full">
          <div className="mr-3">
            <img src={image} alt="Measure image" />
          </div>
          <div className="md:w-1/1 md:ml-10 ">
            <div className="text-left sm:text-left md:text-left lg:text-justify xl:text-left pb-14">
              <h1
                className="font-semibold text-4xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
                style={{ color: "rgb(55, 53, 47)" }}
              >
                You're in the right place.
              </h1>
              <span className="text-md   opacity-70 py-2">
                Brilliant gets you hands-on to help improve your professional
                skills and knowledge.You'll interact with concepts and solve fun
                problems in math, science, and computer science.
              </span>
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

export default RightPlace;
