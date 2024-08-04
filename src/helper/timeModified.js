export function timeModified(timestamp) {
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = date.toLocaleString("en-US", options).replace(/,/g, "");
  const [day, month, year, time] = formattedDate.split(" ");

  return `${day}-${month}-${year}, ${time}`;
}
