import React, { useState, useEffect } from "react";
import PhoneSVG from "../../../assets/SVGs/PhoneSVG";
import PlayButtonSvg from "../../../assets/SVGs/PlayButtonSvg";
import ImprovePerformanceSvg from "../../../assets/SVGs/ImprovePerformanceSvg";
import PlusIconSvg from "../../../assets/SVGs/PlusIconSvg";
import NotesSvg from "../../../assets/SVGs/NotesSvg";
import DateIconSvg from "../../../assets/SVGs/DateIconSvg";
import DateInput from "../../../components/inputs/DateInput";

const CoachingReportAccept = () => {
  const [dates, setDates] = useState([]);
  const [previousWeekMonday, setPreviousWeekMonday] = useState(null);
  const handleDateChange = (index, newDate) => {
    const updatedDates = [...dates];
    updatedDates[index] = newDate;
    setDates(updatedDates);
  };
  function getPreviousWeekMonday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

    // Calculate the offset for Monday of the previous week
    const daysSinceLastMonday = (dayOfWeek + 6) % 7; // Days since the last Monday
    const daysToSubtract = daysSinceLastMonday + 7; // Go back to Monday of the previous week

    // Subtract the calculated days
    let previousMonday = new Date(today);
    previousMonday.setDate(today.getDate() - daysToSubtract);
    previousMonday = previousMonday.toDateString();
    setPreviousWeekMonday(previousMonday);
  }
  let data = [1, 2, 3];
  let callTypeDropdown = [
    { label: "Call Type" },
    { label: "Outbound" },
    { label: "Inbound" },
    { label: "Intake" },
    { label: "Return" },
    { label: "Retention" },
    { label: "Customer Service" },
    { label: "Client Management" },
    { label: "Sale" },
    { label: "Sale Close" },
  ];

  useEffect(() => {
    getPreviousWeekMonday();
  }, []);
  return (
    <div className="bg-[#F6F7F9]">
      <div className="bg-[#1E40AF] flex items-center justify-center pb-[70px] pt-16">
        <div className="w-full max-w-layout flex items-center justify-center flex-col gap-3">
          <h1 className="text-whitePara font-medium text-[32px]">
            Calls Reviewed
          </h1>
          <div className="overflow-x-auto  w-full">
            <table className="table  w-full">
              <tbody className="w-full">
                {/* row 1 */}
                {data.map((item, index) => {
                  return (
                    <>
                      <tr
                        key={index}
                        className={`w-full py-5 ${
                          index === data.length - 1
                            ? ""
                            : "border-b-2 border-[#1414C9]"
                        }`}
                      >
                        <td>
                          <div className="flex items-center  gap-3 ">
                            <div className="bg-[#1414C9] p-3 rounded-full">
                              <PhoneSVG />
                            </div>

                            <select className="select select-lg w-[80%] focus:outline-none bg-transparent text-white ">
                              {callTypeDropdown?.map((option, index) => {
                                return (
                                  <>
                                    <option
                                      key={index}
                                      selected={index === 0}
                                      className="text-black"
                                    >
                                      {option.label}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="placeholder:text-white text-white input input-bordered  w-full active:border-none focus:border-none border border-[#6b7280]  bg-transparent rounded-md"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="placeholder:text-white text-white input input-bordered  w-full active:border-none focus:border-none border border-[#6b7280]  bg-transparent rounded-md"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Outcome"
                            className="placeholder:text-white text-white input input-bordered  w-full active:border-none focus:border-none border border-[#6b7280]  bg-transparent rounded-md"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Disposition"
                            className="placeholder:text-white text-white input input-bordered  w-full active:border-none focus:border-none border border-[#6b7280]  bg-transparent rounded-md"
                          />
                        </td>
                        <td>
                          <DateInput
                            startDate={dates[index] || new Date()} // Fallback to today's date
                            setStartDate={(newDate) =>
                              handleDateChange(index, newDate)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Insert the link here"
                            className="placeholder:text-white text-white input input-bordered  w-full active:border-none focus:border-none border border-[#6b7280]  bg-transparent rounded-md"
                          />
                          {/* <button className="bg-[#1414C9] p-3 rounded-full w-11 h-11 flex items-center justify-center">
                            <PlayButtonSvg />
                          </button> */}
                        </td>
                      </tr>
                      {/* <div className="w-full py-4 bg"> </div> */}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-40 pb-60 flex-col gap-24">
        <div className="w-full max-w-layout  flex items-center justify-center flex-col gap-24 ">
          {/* Product Knowledge */}
          <div>
            <h2 className="bg-[#3B82F6] w-max text-white text-[26px] px-7 py-4 mb-5">
              Product Knowledge
            </h2>
            <div className="w-full max-w-layout flex">
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Highlighted Relevant Features
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Fully explained benefits targeted to clients need
                </p>
                <select className="select select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Provided correct responses
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Correctly identified questions
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>{" "}
          </div>
          {/* Brand Adherence */}
          <div>
            <h2 className="bg-[#3B82F6] w-max text-white text-[26px] px-7 py-4 mb-5">
              Brand Adherence
            </h2>
            <div className="w-full max-w-layout flex">
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Knowledgeable about Product specifics
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Provided correct contact information
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Quoted accurate price
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/4 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Correct sales interaction process followed
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>{" "}
          </div>
          {/* Listening Skills */}
          <div className="w-full">
            <h2 className="bg-[#3B82F6] w-max text-white text-[26px] px-7 py-4 mb-5">
              Listening Skills
            </h2>
            <div className="flex w-full">
              <div className="w-1/5 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Attention
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/5 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Tone
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/5 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Pitch
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/5 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Speed
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/5 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Transitioning
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>{" "}
          </div>
          {/* Program Requirements */}
          <div className="w-full">
            <h2 className="bg-[#3B82F6] w-max text-white text-[26px] px-7 py-4 mb-5">
              Program Requirements
            </h2>
            <div className="flex w-full">
              <div className="w-1/3 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Provided correct responses 
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/3 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Correctly identifies questions
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/3 border-r-2 border-[#E3E3E3] ">
                <p className="h-[120px] bg-white py-3 px-5 text-xl text-darkPara">
                  Provides relevant information
                </p>
                <select className="select select-bordered select-lg w-full focus:outline-none bg-transparent h-16">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => {
                    return (
                      <option selected key={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>{" "}
          </div>
          {/* Program Requirements */}
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h2 className="bg-[#3B82F6] w-max text-white text-[26px] px-7 py-4 mb-5">
                Program Requirements
              </h2>
              <p className="text-2xl font-medium text-[#3D4A57]">
                {previousWeekMonday}
              </p>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table table-zebra w-full">
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-white">
                    <th className="w-1/4 text-start text-darkPara text-xl font-semibold border-r-2 px-7">
                      Active Time
                    </th>
                    <td className="w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                    <th className="w-1/4 text-darkPara text-xl font-semibold border-r-2 px-7">
                      Conversion
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th className="w-1/4 text-start text-darkPara text-xl font-semibold border-r-2 px-7">
                      Inactive Time
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                    <th className="w-1/4 text-darkPara text-xl font-semibold border-r-2 px-7">
                      Sales per hour
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr className="bg-white">
                    <th className="w-1/4 text-start text-darkPara text-xl font-semibold border-r-2 px-7">
                      Contacts
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                    <th className="w-1/4 text-darkPara text-xl font-semibold border-r-2 px-7">
                      Earning per hour
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th className="w-1/4 text-start text-darkPara text-xl font-semibold border-r-2 px-7">
                      Conversion
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                    <th className="w-1/4 text-darkPara text-xl font-semibold border-r-2 px-7"></th>
                    <td className="py-6 w-1/4 text-darkPara text-xl border-r-2 px-7"></td>
                  </tr>
                  {/* row 5 */}
                  <tr className="bg-white">
                    <th className="w-1/4 text-start text-darkPara text-xl font-semibold border-r-2 px-7">
                      Sales
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                    <th className="w-1/4 text-darkPara text-xl font-semibold border-r-2 px-7">
                      Total weekly earnings
                    </th>
                    <td className=" w-1/4 text-darkPara text-xl border-r-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered  w-full active:border-none focus:border-none border-2 border-[#E3E3E3]  bg-white rounded-md"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex items-center justify-center pb-[70px] pt-16 w-full">
          <div className="w-full max-w-layout flex justify-center flex-col gap-10">
            <div className="flex gap-6 items-center">
              <div className="flex gap-10 items-center w-72">
                <PlusIconSvg />
                <p className="text-2xl w-52">Positive</p>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[650px] h-28 px-6 focus:outline-none border-2 border-[#E3E3E3] rounded-2xl"
              />
            </div>
            <div className="flex gap-6 items-center ">
              <div className="flex gap-4 items-center w-72">
                <ImprovePerformanceSvg />
                <p className="text-2xl w-52">Performance Goal Improvement</p>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[650px] h-28 px-6 focus:outline-none border-2 border-[#E3E3E3] rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-[70px]  w-full">
          <div className="w-full max-w-layout flex justify-center flex-col gap-10">
            <div className="flex gap-6 items-center">
              <div className="flex gap-10 items-center w-72">
                <NotesSvg />
                <p className="text-2xl w-52">Notes</p>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[650px] h-28 px-6 focus:outline-none border-2 border-[#E3E3E3] rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-6 items-center ">
                <div className="flex items-center w-72">
                  <p className="text-2xl">Supervisor Signature</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-[400px] h-20 px-6 focus:outline-none border-2 border-[#E3E3E3]  bg-white"
                />
              </div>
              <label className="input input-bordered flex items-center gap-2 relative">
                {/* <div className="absolute left-2 top-3">
                  <DateIconSvg color={"#767676"} />
                </div> */}
                <input
                  type="date"
                  className="grow focus:outline-none w-[360px] h-16 border-2 border-[#E3E3E3] bg-white px-4 placeholder:text-[#6F6F6F]"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingReportAccept;
