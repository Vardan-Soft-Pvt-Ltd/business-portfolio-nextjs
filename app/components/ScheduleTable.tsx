import React from "react";

const ScheduleTable: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl overflow-x-scroll">
      <table className="min-w-full h-80 border-collapse border border-gray-300 text-TextDarkBlue">
        <thead className="bg-[#f6f6f6] ">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-center text-TextDarkBlue">
              Cohort
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Duration
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Class Schedule
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Seats Available
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Seats Remaining
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              cohort: "Cohort 1",
              duration: "January - February",
              schedule: "Saturdays, 10 AM - 1 PM",
              seats: 10,
            },
            {
              cohort: "Cohort 2",
              duration: "April - May",
              schedule: "Saturdays, 10 AM - 1 PM",
              seats: 10,
            },
            {
              cohort: "Cohort 3",
              duration: "July - August",
              schedule: "Saturdays, 10 AM - 1 PM",
              seats: 10,
            },
            {
              cohort: "Cohort 4",
              duration: "October - November",
              schedule: "Saturdays, 10 AM - 1 PM",
              seats: 10,
            },
          ].map((row, index) => (
            <tr key={index}>
              <td className=" px-4 py-2 text-center">{row.cohort}</td>
              <td className="border bg-[#6c66d2] border-gray-300 px-4 py-2 ">
                <div className=" text-white text-center rounded-md px-2 py-1 mx-auto w-fit">
                  {row.duration}
                </div>
              </td>
              <td className=" px-4 py-2 text-center">{row.schedule}</td>
              <td className=" px-4 py-2 text-center">{row.seats}</td>
              <td className=" px-4 py-2 text-center">{row.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
