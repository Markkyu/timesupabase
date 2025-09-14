import { useParams, useSearchParams } from "react-router-dom";
import MWFTimetable from "./MWFTimeatable";
import TTHSTimetable from "./TTHSTimetable";
import useYearSemCourse from "@hooks/useYearSemCourse";
import { useEffect, useState } from "react";

const TimetablePage = () => {
  const { collegeID } = useParams();
  const [searchParams] = useSearchParams(); // query params
  const [showJSON, setShowJSON] = useState(false); // toggle state

  const year = searchParams.get("year");
  const sem = searchParams.get("sem");

  const { courses, courses_loading, courses_error } = useYearSemCourse(
    year,
    sem,
    collegeID
  );

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-100 min-h-screen p-6 font-sans overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl font-bold text-gray-800">
              Create Schedule
            </h1>
          </header>

          {/* Course Placeholder */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Courses to be scheduled
              </h2>
              <div>
                <span className="pr-2 text-gray-600">{`Click this to see the JSON to be sent to the scheduler -->`}</span>
                <button
                  onClick={() => setShowJSON(!showJSON)}
                  className="px-4 py-1 bg-blue-500 text-white rounded-lg text-sm"
                >
                  {showJSON ? "Show Cards" : "Show JSON"}
                </button>
              </div>
            </div>

            {showJSON ? (
              <>
                <p className="text-gray-600 flex flex-col gap-5 text-lg pb-4">
                  <p>📝 Notes:</p>
                  <p>
                    • Scheduler will not start if a teacher is null in a course
                    (meaning no teacher is assigned).
                  </p>
                  <p>
                    • Course college is just referenced to a college program as
                    well as the teacher.
                  </p>
                  <p>
                    • Teacher availability = "full" is just a placeholder. It
                    can be an array of time where the teacher is available
                  </p>
                  <p>
                    • I was thinking about the courses should be locked once
                    saved in the database. ex. "locked": true. That way it will
                    not be included in the scheduler.
                  </p>
                  <p>
                    • Why should a course be locked? Since we aim for a
                    heirarchical approach, Ms. Vernie will schedule first and
                    then the following dept heads who will use the scheduler
                    will not affect the preceding (planted) courses by Ms.
                    Vernie
                  </p>
                  <p>
                    • The resulting data in a new column (alloted time) in the
                    scheduler database can be a string: ["M_0", "W_0", "F_0"].
                    For example, this is 3 hours with the converted time of
                    Monday: 7 AM and so on...
                  </p>
                  <p>
                    • The scheduler is open for suggestions, these are just how
                    I see the scheduler in accordance to the data being thrown
                    to the function.
                  </p>
                </p>

                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {JSON.stringify(courses, null, 2)}
                </pre>
              </>
            ) : (
              <div className="text-gray-700 italic grid grid-cols-3 2xl:grid-cols-4 gap-2">
                {courses?.map((course) => (
                  <div
                    key={course.course_id}
                    className="border-1 px-4 py-2 rounded-lg"
                  >
                    <p>{course.course_name}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* MWF Calendar */}
          <MWFTimetable />

          {/* TTH Timetable */}
          <TTHSTimetable />
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;

// import { useEffect, useState } from "react";
// import { readableMWFTime, readableTThTime } from "./readableTime";
// import supabase from "@config/supabase";

// const mwfHead = ["Monday", "Wednesday", "Friday"];
// const mwfTime = Array.from({ length: 14 }, (_, i) => i);

// const tthHead = ["Tuesday", "Thursday"];
// const tthTime = Array.from({ length: 9 }, (_, i) => i);

// const timeSlotMap = new Map();

// const Timetable = () => {
//   const [schedules, setSchedules] = useState(null);

//   const fetchData = async () => {
//     const { data } = await supabase
//       .from("schedules")
//       .select(`*, courses(course_name)`);

//     if (data) {
//       setSchedules(data);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   schedules?.forEach(({ courses, time_slot }) => {
//     time_slot.forEach((slot) => {
//       timeSlotMap.set(slot, courses?.course_name);
//     });
//   });

//   return (
//     <>
//       <h1 className="text-2xl font-bold text-center my-6">My Scheduler</h1>

//       {/* MWF Table */}
//       <table className="border border-gray-400 border-collapse min-w-[600px] mx-auto my-6">
//         <thead>
//           <tr className="bg-gray-200">
//             <td className="border border-gray-400 px-4 py-2 font-semibold">
//               Time
//             </td>
//             {mwfHead.map((weekday, i) => (
//               <td
//                 key={i}
//                 className="border border-gray-400 px-4 py-2 font-semibold"
//               >
//                 {weekday}
//               </td>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {mwfTime.map((time, i) => (
//             <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
//               <td className="border border-gray-400 px-4 py-2">
//                 {readableMWFTime(time)}
//               </td>
//               {mwfHead.map((day, j) => {
//                 const key = `${day.toUpperCase()}_${time}`;
//                 const course = timeSlotMap.get(key);
//                 return (
//                   <td
//                     key={j}
//                     className={`border border-gray-400 px-4 py-2 ${
//                       course ? "bg-green-200" : ""
//                     }`}
//                   >
//                     {course || ""}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* TTH Table */}
//       <table className="border border-gray-400 border-collapse min-w-[600px] mx-auto my-6">
//         <thead>
//           <tr className="bg-gray-200">
//             <td className="border border-gray-400 px-4 py-2 font-semibold">
//               Time
//             </td>
//             {tthHead.map((weekday, i) => (
//               <td
//                 key={i}
//                 className="border border-gray-400 px-4 py-2 font-semibold"
//               >
//                 {weekday}
//               </td>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tthTime.map((time, i) => (
//             <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
//               <td className="border border-gray-400 px-4 py-2">
//                 {readableTThTime(time)}
//               </td>
//               {tthHead.map((day, j) => {
//                 const key = `${day.toUpperCase()}_${time}`;
//                 const course = timeSlotMap.get(key);
//                 return (
//                   <td
//                     key={j}
//                     className={`border border-gray-400 px-4 py-2 ${
//                       course ? "bg-green-200" : ""
//                     }`}
//                   >
//                     {course || ""}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Timetable;
