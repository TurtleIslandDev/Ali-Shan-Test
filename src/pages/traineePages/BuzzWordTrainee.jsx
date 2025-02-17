import React, { useCallback, useState } from "react";
import Button from "../../components/Buttons/Button";
import { useForm } from "react-hook-form";
import TiSolutionsLogoSvg from "../../assets/SVGs/logos/TiSolutionsLogoSvg";
import ItsBuzzMarketingLogo from "../../assets/SVGs/logos/ItsBuzzMarketingLogo";
const BuzzWordTrainee = () => {
  // Grid items with id and name
  const gridItems = Array.from({ length: 25 }, (_, index) => {
    const names = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "ninth",
      "tenth",
      "eleventh",
      "twelfth",
      "thirteenth",
      "fourteenth",
      "fifteenth",
      "sixteenth",
      "seventeenth",
      "eighteenth",
      "nineteenth",
      "twentieth",
      "twenty-first",
      "twenty-second",
      "twenty-third",
      "twenty-fourth",
      "twenty-fifth",
    ];
    return { id: index + 1, name: names[index] };
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // State to track clicked items
  const [clickedData, setClickedData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1;
    });
  };
  const submitButtonClick = useCallback(() => {
    console.log(clickedData, "clicked");
  }, [clickedData]);
  // Handler function for clicking a grid item
  const handleItemClick = (item) => {
    const timestamp = new Date().toLocaleString();

    setClickedData((prev) => {
      const existingIndex = prev.findIndex((data) => data.id === item.id);

      if (existingIndex === -1) {
        // If item is not clicked yet, add it to the array
        return [...prev, { ...item, timestamp, clicked: true }];
      } else {
        // If item is already clicked, toggle its clicked state but keep it in the array
        const updatedArray = [...prev];
        updatedArray[existingIndex] = {
          ...updatedArray[existingIndex],
          clicked: !updatedArray[existingIndex].clicked,
          timestamp,
        };

        return updatedArray;
      }
    });
  };

  // Function to determine background color based on clicked state
  const getBgColor = (id) => {
    const item = clickedData.find((data) => data.id === id);
    return item?.clicked ? "bg-[#93959880] text-white" : "bg-white";
  };

  return (
    <div className="flex flex-col justify-center items-center gap-7 h-screen bg-gray-100">
      <ItsBuzzMarketingLogo size={"small"} />
      {activeStep === 0 ? (
        <form
          className="w-full max-w-96 flex flex-col items-center"
          onSubmit={handleSubmit(handleNext)}
        >
          <div className="w-full mb-5">
            <p className="text-2xl text-[#222] mb-2">Email</p>
            <label className="input input-bordered flex items-center gap-2 ">
              <input
                {...register("email", { required: true })}
                type="text"
                className="grow h-16 border-none rounded-md pl-5 focus:outline-none w-96"
                placeholder="xyz@email.com"
              />
            </label>
            {errors.email && (
              <span className="text-right text-red-500 text-xs">
                *This field is required
              </span>
            )}
          </div>

          <Button
            type={"submit"}
            bgColor="#000000"
            className={`w-[50%] justify-center`}
          >
            Next
          </Button>
        </form>
      ) : activeStep === 1 ? (
        <>
          <div className="grid grid-cols-5 grid-rows-5 border-collapse">
            {gridItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`flex items-center justify-center h-28 w-44 border border-gray-300 cursor-pointer font-semibold text-center ${getBgColor(
                  item.id
                )}`}
              >
                {item.name}
              </div>
            ))}
          </div>

          <Button
            bgColor="#000000"
            className="w-[28%] h-10 rounded-md justify-center"
            onClick={submitButtonClick}
          >
            Submit
          </Button>
        </>
      ) : (
        <>You have completed the card</>
      )}
    </div>
  );
};

export default BuzzWordTrainee;
