export const toastDuration = 2000;

// Calculates the time difference in days between startDate and today:
export function calculateStartDays(startDate) {
  const startDateTime = new Date(startDate).getTime();
  const today = new Date().getTime();
  const differenceInTime = startDateTime - today;
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
}

// Calculates the time difference in days between startDate and endDate:
export function calculateDurationDays(startDate, endDate) {
  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();
  const differenceInTime = endDateTime - startDateTime;
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
}

// Formats createdAt and updatedAt timestamps:
export function formatTimestamp(dateString) {
  const optionsDate = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = new Date(dateString);
  const formattedDate = date
    .toLocaleDateString("de-DE", optionsDate)
    .replace(".", "");

  const formattedTime = date.toLocaleTimeString("de-DE", optionsTime);

  return `${formattedDate} | ${formattedTime} Uhr`;
}

// Formats date from MongoDB for shorter display on cards:
// export function formatDate(dateString) {
//   const date = new Date(dateString);
//   return date.toISOString().split("T")[0];
// };

export function formatDate(dateString) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", options).replace(".", "");
  // return date.toLocaleDateString("en-US", options).replace(".", "");
}

// Formats date so it can be called as defaultValue:
export function formatDateForInput(isoDateString) {
  if (!isoDateString) return "";

  // Create a Date object from the ISO string
  const date = new Date(isoDateString);

  // Adjust for timezone offset to ensure the correct date is used
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() - userTimezoneOffset);

  // Format the date as "YYYY-MM-DD"
  return adjustedDate.toISOString().split("T")[0];
}

// Validates that end date on form is after start date:
export function validateTripDates(tripData) {
  const startDate = new Date(tripData.start);
  const endDate = new Date(tripData.end);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (endDate < startDate) {
    return false;
  }

  return true;
}
