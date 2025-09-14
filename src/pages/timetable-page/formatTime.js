const formatTime = (timeslot) => {
  const [weekDay, time_code] = timeslot.split("_");

  if (["TUESDAY", "THURSDAY", "SATURDAY"].includes(weekDay)) {
    let convertedTime = Number(time_code) * 1.5 + 7;

    const hours = Math.floor(convertedTime);
    const displayHour = hours > 12 ? hours - 12 : hours;
    const meridiem = hours >= 12 ? "PM" : "AM";
    const minutes = convertedTime % 1 === 0.5 ? "30" : "00";

    return `${weekDay}: ${displayHour}:${minutes} ${meridiem}`;
  }

  if (["MONDAY", "WEDNESDAY", "FRIDAY"].includes(weekDay)) {
    let convertedTime = Number(time_code) + 7;

    const displayHour = convertedTime > 12 ? convertedTime - 12 : convertedTime;
    const meridiem = convertedTime >= 12 ? "PM" : "AM";
    const minutes = "00";

    return `${weekDay}: ${displayHour}:${minutes} ${meridiem}`;
  }
};

export default formatTime;
// const items = [];

// // For MWF
// // for (let i = 0; i < 14; i++) {
// //   items.push(`FRIDAY_${i}`);
// // }

// // For TTh
// for (let i = 0; i < 9; i++) {
//   items.push(`THURSDAY_${i}`);
// }

// items.map((item) => console.log(formatTime(item)));
