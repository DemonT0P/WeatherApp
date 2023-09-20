export function checkCondition(condition) {
  condition = condition.toLowerCase();
  console.log(condition);
  if (condition.includes("clear")) return "clear day";
  if (condition.includes("sunny")) return "sunny day";
  if (condition.includes("cloud")) return "clouds";
  if (condition.includes("mist")) return "mist";
  if (condition.includes("rain")) return "rain";
  if (condition.includes("snow") || condition.includes("fleet")) return "snow";
  if (condition.includes("drizzle")) return "drizzle";
  if (condition.includes("thunder")) return "thunder";
  if (condition.includes("fog")) return "fog";
  if (condition.includes("blizzard")) return "blizzard";
  if (condition.includes("ice")) return "ice";
  return "weather forecast";
}
