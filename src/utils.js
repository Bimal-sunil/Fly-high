import timings from "./data/timing.json";

export const FLIGHTCLASSES = [
  "Economy",
  "Premium Economy",
  "Business Class",
  "First Class",
];

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

export const formatDate = (date) => {
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const formatTimeFromISOString = (isoString) => {
  const date = new Date(isoString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Convert to 12-hour format

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const formatDateFromISOString = (isoString) => {
  const date = new Date(isoString);
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const calculateRate = (from, to, avgCost) => {
  let time = 0;
  for (let i = 0; i < timings.length; i++) {
    if (
      (timings[i].from === from && timings[i].to === to) ||
      (timings[i].from === to && timings[i].to === from)
    ) {
      time = timings[i].durationHours;
    }
  }

  return (time / 2) * avgCost;
};
