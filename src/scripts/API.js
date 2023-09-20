import { addToDom } from "./Dom";
import { Temp } from "./Temp";
import { checkCondition } from "./Utils";

export async function getTemp(url) {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0feaf2a99a2145f391a203036231309&q=${url}`
    );

    if (response.status != 200) {
      let responseJSON = await response.json();
      throw new Error(responseJSON.error.message);
    } else {
      let responseJSON = await response.json();
      let condition = responseJSON.current.condition.text;
      let feelsLike = [
        responseJSON.current.feelslike_c,
        responseJSON.current.feelslike_f,
      ];
      let wind = [responseJSON.current.wind_kph, responseJSON.current.wind_mph];
      let humidity = responseJSON.current.humidity;
      let city = responseJSON.location.name;
      let temp = [responseJSON.current.temp_c, responseJSON.current.temp_f];
      let region = responseJSON.location.region;

      await addToDom(
        Temp(condition, city, region, temp, feelsLike, wind, humidity)
      );
    }
  } catch (err) {
    alert(err);
  }
}

export async function getBackgroundPic(condition) {
  let response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=0IId1xgI4YAoLog8jJujHit6SyUe9No9&s=${checkCondition(
      condition
    )}`,
    {
      mode: "cors",
    }
  );
  let responseJSON = await response.json();
  return responseJSON.data.images.original.url;
}

export function getUserLocation() {
  navigator.geolocation.getCurrentPosition(async (location) => {
    await getTemp(`${location.coords.latitude},${location.coords.longitude}`);
  });
}
