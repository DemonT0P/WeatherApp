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
  if (condition.includes("overcast")) return "overcast";
  return "weather forecast";
}

export function toCelsius(temp) {
  return Math.floor(((temp - 32) * (5 / 9)).toFixed(1) * 100) / 100;
}

export function toFahrenheit(temp) {
  return Math.floor((temp * (9 / 5) + 32).toFixed(1) * 100) / 100;
}

export function toMPH(velocity) {
  return Math.floor((velocity / 1.609).toFixed(1) * 100) / 100;
}

export function toKPH(velocity) {
  return Math.floor((velocity * 1.609).toFixed(1) * 100) / 100;
}
