export const getAvailability = (checkin, checkout) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const checkinDate = checkin.split("-");
  const monthIdx = +checkinDate[1];
  const month = months[monthIdx - 1];
  const startingDay = checkinDate[2];
  const endingDay = checkout.split("-")[2];

  return `${month} ${startingDay}-${endingDay}`;
};
