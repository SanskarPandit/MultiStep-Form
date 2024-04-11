import React, { useState } from "react";
import icons from "../constant/icons.js";
import Describe from "./Describe.js";
import Interests from "./Interests.js";
import RightPlace from "./RightPlace.js";
import Maths from "./Maths.js";
import Rating from "./Rating.js";
import Final from "./Final.js";
const Form = () => {
  const [page, setPage] = useState(1);
  const totalPage = 5;
  const nextPage = () => {
    if (page <= totalPage) {
      setPage(page + 1);
    } else {
      alert("Something went wrong!"); // Show additional component on reaching last step
    }
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  return (
    <>
      <div className="w-screen h-screen p-12 flex justify-center items-center mb-xl">
        <div className="w-full md:w-6/12 lg:w-5/12 space-y-4">
          {page === 1 && (
            <>
              {" "}
              <div className="pb-6">
                <div class="w-full bg-gray-200 rounded-lg mb-6 dark:bg-gray-700 h-1.5 w-xl">
                  <div
                    class="bg-green-600 h-1.5  rounded-lg  dark:bg-blue-500  "
                    style={{ width: `${(page / totalPage) * 100}%` }}
                  ></div>
                </div>
              </div>
              <Describe nextPage={nextPage} />
            </>
          )}

          {page === 2 && (
            <>
              {" "}
              <div className="relative cursor-pointer mt-3 bg">
                <img
                  src={icons.left}
                  className="absolute stroke-red-700"
                  onClick={prevPage}
                />
              </div>
              <div className="pb-6 ">
                <div class="w-full bg-gray-200 rounded-lg mb-4 dark:bg-gray-700 h-1.5 w-xl ml-6">
                  <div
                    class="bg-green-600 h-1.5  rounded-lg  dark:bg-blue-500  "
                    style={{ width: `${(page / totalPage) * 100}%` }}
                  ></div>
                </div>
              </div>
              <Interests nextPage={nextPage} prevPage={prevPage} />
            </>
          )}
          {page == 3 && (
            <>
              {" "}
              <div className="relative cursor-pointer mt-3 bg">
                <img
                  src={icons.left}
                  className="absolute stroke-red-700"
                  onClick={prevPage}
                />
              </div>
              <div className="pb-6">
                {/* <img src={icons.left} /> */}
                <div class="w-full bg-gray-200 rounded-lg mb-6 dark:bg-gray-700 h-1.5 w-xl ml-6">
                  <div
                    class="bg-green-600 h-1.5  rounded-lg  dark:bg-blue-500  "
                    style={{ width: `${(page / totalPage) * 100}%` }}
                  ></div>
                </div>
              </div>
              <RightPlace nextPage={nextPage} prevPage={prevPage} />
            </>
          )}
          {page == 4 && (
            <>
              {" "}
              <div className="relative cursor-pointer mt-3 bg">
                <img
                  src={icons.left}
                  className="absolute stroke-red-700"
                  onClick={prevPage}
                />
              </div>
              <div className="pb-6">
                {/* <img src={icons.left} /> */}
                <div class="w-full bg-gray-200 rounded-lg mb-6 dark:bg-gray-700 h-1.5 w-xl ml-6">
                  <div
                    class="bg-green-600 h-1.5  rounded-lg  dark:bg-blue-500  "
                    style={{ width: `${(page / totalPage) * 100}%` }}
                  ></div>
                </div>
              </div>{" "}
              <Maths nextPage={nextPage} prevPage={prevPage} />
            </>
          )}
          {page == 5 && (
            <>
              {" "}
              <div className="pb-6">
                <div class="w-full bg-gray-200 rounded-lg mb-6 dark:bg-gray-700 h-1.5 w-xl ">
                  <div
                    class="bg-green-600 h-1.5  rounded-lg  dark:bg-blue-500  "
                    style={{ width: `${(page / totalPage) * 100}%` }}
                  ></div>
                </div>
              </div>{" "}
              <Rating nextPage={nextPage} prevPage={prevPage} />
            </>
          )}
          {page == 6 && <Final nextPage={nextPage} prevPage={prevPage} />}
          {/* {currentStep === 2 && (
            <StepTwo nextStep={nextStep} prevStep={prevStep} />
          )}
        {currentStep === 3 && <StepThree prevStep={prevStep} />} */}
        </div>
      </div>
    </>
  );
};

export default Form;
