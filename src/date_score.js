export function getDate() {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

