export function checkIfDateIsOverTheWeekend(dateString = "") {
  if (typeof dateString !== "string") {
    throw new Error("Date should be a string like a YYYY-MM-DD");
  }
  if (isNaN(Date.parse(dateString))) {
    throw new Error("Incorrect date type");
  }

  const date = new Date(dateString);
  const dayOfWeek = date.getUTCDay();
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    return true;
  }

  return false;
}
