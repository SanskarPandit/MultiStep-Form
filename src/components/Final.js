import React, { useState, useEffect } from "react";
import finalImg from "../assets/images/final.svg";
const Final = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer); // Clear the timer when component unmounts
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <div
          className={`flex justify-center items-center h-screen ${
            isLoading ? "block" : "hidden"
          }`}
        >
          {/* Your loader component */}
          <div className="flex flex-col justify-center items-center h-screen mb-4">
            <div className="animate-spin rounded-full h-16 sm:h-24 w-16 sm:w-24 border-4 sm:border-8 border-yellow-400 mb-4"></div>
            <h1
              className="text-center font-semibold text-3xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
              style={{ color: "rgb(55, 53, 47)" }}
            >
              Finding learning path recommendations for you based on your
              response
            </h1>
          </div>
        </div>
      ) : (
        <>
          <h1
            className=" mb-4 text-center font-bold text-4xl ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji pb-6"
            style={{ color: "rgb(55, 53, 47)" }}
          >
            Learning path based on your answers.
          </h1>
          <p className="text-center font-semibold text-xl text-gray-500 mt-4">
            Choose one to get started. You can switch anytime.
          </p>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex-1 bg-white border rounded-lg overflow-hidden flex ml-3 hover:shadow-xl mt-6 cursor-pointer ">
              <div className="w-3/4 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Foundational Math{" "}
                  <span className="text-base text-gray-700 mb-2">
                    Build your foundational skills in algebra,geometry and
                    probability.
                  </span>{" "}
                </h3>
              </div>
              <div className="w-1/2">
                <img
                  src={finalImg}
                  alt="Card Image 2"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 bg-white border rounded-lg overflow-hidden flex ml-3 hover:shadow-xl mt-6 cursor-pointer">
              <div className="w-3/4 p-4">
                <h3 className="text-xl font-bold mb-2">
                  Mathematical Thinking{" "}
                  <span className="text-base text-gray-700 mb-2">
                    Build your foundational skills in algebra,geometry and
                    probability.
                  </span>{" "}
                </h3>
              </div>
              <div className="w-1/2">
                <img
                  src={finalImg}
                  alt="Card Image 2"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Final;
