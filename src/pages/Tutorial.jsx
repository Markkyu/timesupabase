import { Settings } from "lucide-react";

const steps = [
  {
    title: "1. Choose a College Program",
    description:
      "Each college can have its own set of courses, teachers, and rooms. Navigate to dashboard to see all available programs. *** Note: Request college addition and deletion from admin ***",
  },
  {
    title: "2. Add Courses to a College Program",
    description:
      "Select the college's course tab and input the course name, course code, and hours per week. Click 'Add Course' to save. From here you can edit and delete a course.",
  },
  {
    title: "3. Add Teachers",
    description:
      "Click the teachers in a college. Fill in the teacher's name, department, and preferred availability if applicable. Click 'Add Teacher' to proceed.",
  },
  {
    title: "4. Assign a teacher to a course",
    description:
      "In a list of courses, click the assign teacher icon. Choose the applicable teacher for the subject and click done. *** Note: All teachers will be listed, they are just filtered ascending by department ***",
  },
  // {
  //   title: "4. Add Rooms",
  //   description:
  //     "Navigate to the 'Rooms' section to register available classrooms. Specify the room name or number, capacity, and building/floor if needed. Click 'Add Room' to save it to the list.",
  // },
  {
    title: "5. Generate Schedule",
    description:
      "When all course–teacher combinations are added, head to the 'Schedule' section and click 'Auto-plot Schedule'. The system will automatically allocate timeslots and rooms while avoiding conflicts.",
  },
  {
    title: "Manual Override",
    icon: <Settings className="inline-block mr-2" />,
    description:
      "The user always has the option of manual adjustments if the schedule does not fit their setup.",
  },
];

const Tutorial = () => {
  return (
    <div className="h-full flex flex-col bg-gray-200">
      <div className="flex-1 overflow-auto min-h-0">
        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <h1 className="flex items-center justify-center space-x-2 text-4xl font-bold mb-6 text-gray-800">
            <span>A quick run-down of Timelyfy (for moderators)</span>
          </h1>
          <p className="text-gray-600 text-lg text-center">
            Follow these steps to prepare your data and generate a schedule for
            your college program.
          </p>

          {steps.map(({ title, description, icon }, index) => (
            <div
              key={index}
              id={`my-index-${index}`}
              className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-800 duration-100"
            >
              <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                {icon && icon}
                {title}
              </h2>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
