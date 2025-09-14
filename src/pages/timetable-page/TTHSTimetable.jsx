const TTHSTimetable = () => {
  const TTHdays = ["Tuesday", "Thursday", "Saturday"];
  const startHour = 7;
  const endHour = 20;

  // Generate 1.5-hour interval slots (TTH)
  const getOneHalfSlots = () => {
    const times = [];
    for (let hour = startHour; hour < endHour; hour += 1.5) {
      const whole = Math.floor(hour);
      const mins = hour % 1 === 0 ? "00" : "30";
      const label = `${whole % 12 === 0 ? 12 : whole % 12}:${mins} ${
        hour < 12 ? "AM" : "PM"
      }`;
      times.push(label);
    }
    return times;
  };

  return (
    <>
      <section className="bg-white p-6 rounded-2xl shadow mb-20">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          TTH (1.5-hour intervals)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-24 p-2 border border-gray-300 text-left text-sm">
                  Time
                </th>
                {TTHdays.map((day) => (
                  <th
                    key={day}
                    className="p-2 border border-gray-300 text-center text-sm"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getOneHalfSlots().map((time, idx) => (
                <tr key={idx}>
                  <td className="p-2 border border-gray-300 text-sm">{time}</td>
                  {TTHdays.map((day) => (
                    <td
                      key={day}
                      className="p-2 border border-gray-300 text-center text-sm"
                    >
                      {/* Placeholder for schedule block */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TTHSTimetable;
