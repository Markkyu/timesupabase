const MWFTimeatable = () => {
  const MWFdays = ["Monday", "Wednesday", "Friday"];
  const startHour = 7;
  const endHour = 20;

  // Generate 1-hour interval slots (MWF)
  const getHourlySlots = () => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      const label = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${
        hour < 12 ? "AM" : "PM"
      }`;
      times.push(label);
    }
    return times;
  };

  return (
    <>
      {/* MWF Calendar */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          MWF (1-hour intervals)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-24 p-2 border border-gray-300 text-left text-sm">
                  Time
                </th>
                {MWFdays.map((day) => (
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
              {getHourlySlots().map((time, idx) => (
                <tr key={idx}>
                  <td className="p-2 border border-gray-300 text-sm">{time}</td>
                  {MWFdays.map((day) => (
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

export default MWFTimeatable;
