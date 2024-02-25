export const toastDuration = 2000;

export const isLoadingMessageDuration = 5000;

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
  if (differenceInDays === 0) {
    return differenceInDays + 1;
  } else {
    return differenceInDays;
  }
}

// // ========== Timestamps for createdAt and updatedAt (extended date format)
// export function formatTimestamp(dateString) {
//   const optionsDate = {
//     weekday: "short",
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   };

//   const optionsTime = {
//     hour: "2-digit",
//     minute: "2-digit",
//   };

//   const date = new Date(dateString);
//   const formattedDate = date
//     .toLocaleDateString("de-DE", optionsDate)
//     .replace(".", "");

//   const formattedTime = date.toLocaleTimeString("de-DE", optionsTime);
//   // const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

//   return `${formattedDate} | ${formattedTime} Uhr`;
// }

// ========== Timestamps for createdAt and updatedAt:
export function formatTimestamp(dateString) {
  const optionsDate = {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = new Date(dateString);
  const formattedDate = date
    .toLocaleDateString("de-DE", optionsDate)
    .replace(".", ".");

  const formattedTime = date.toLocaleTimeString("de-DE", optionsTime);
  // const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

  return `${formattedDate} | ${formattedTime} Uhr`;
}

// // ========== extended date format
// export function formatDate(dateString) {
//   const options = {
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   };
//   const date = new Date(dateString);
//   return date.toLocaleDateString("de-DE", options).replace(".", "");
//   // return date.toLocaleDateString("en-US", options).replace(".", "");
// }

// ==========
export function formatDate(dateString) {
  const options = {
    weekday: "short",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", options).replace(".", ".");
  // return date.toLocaleDateString("en-US", options).replace(".", ".");
}

// ========== Formats date so it can be called as defaultValue:
export function formatDateForInput(isoDateString) {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() - userTimezoneOffset);
  return adjustedDate.toISOString().split("T")[0];
}

// ========== Validates that end date on form is after start date:
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
