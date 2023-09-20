import { getBackgroundPic } from "./API";
import { toCelsius, toFahrenheit, toKPH, toMPH } from "./Utils";
import { getTemp } from "./API";

export async function addToDom(info) {
  document.querySelector(".city-info__status").innerText = info.condition;
  document.querySelector(".city-info__name").innerText =
    info.city + ", " + info.region;
  document.querySelector(".temp-info__temp-value").innerText = info.temp[0];
  document.querySelector(".feels-like__value").innerText = info.feelsLike[0];
  document.querySelector(".wind__value").innerText = info.wind[0];
  document.querySelector(".humidity__value").innerText = info.humidity;
  let url = await getBackgroundPic(info.condition);
  document.querySelector("#app").style.backgroundImage = `url(${url})`;
}
export function startEventListeners() {
  let form = document.querySelector(".header__form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await getTemp(document.querySelector(".form__input").value);
  });

  let tempDiv = document.querySelector(".temp-info__temp-value"),
    temp;
  let tempUnit = document.querySelector(".temp-value__unit");

  let feelsLike = document.querySelector(".feels-like__value"),
    feelsLikeValue;
  let feelsLikeUnit = document.querySelector(".feels-like__unit");

  let wind = document.querySelector(".wind__value"),
    windValue;
  let windUnit = document.querySelector(".wind__unit");

  let cUnit = document.querySelector(".units__C");
  cUnit.addEventListener("click", () => {
    if (tempUnit.innerText != "C") {
      temp = tempDiv.innerText;
      tempDiv.innerText = toCelsius(temp);
      tempUnit.innerText = "C";

      feelsLikeValue = feelsLike.innerText;
      feelsLike.innerText = toCelsius(feelsLikeValue);
      feelsLikeUnit.innerText = " C";

      windValue = wind.innerText;
      wind.innerText = toKPH(windValue);
      windUnit.innerText = " kph";
    }
  });

  let fUnit = document.querySelector(".units__F");
  fUnit.addEventListener("click", () => {
    if (tempUnit.innerText != "F") {
      temp = tempDiv.innerText;
      tempDiv.innerText = toFahrenheit(temp);
      tempUnit.innerText = "F";

      feelsLikeValue = feelsLike.innerText;
      feelsLike.innerText = toFahrenheit(feelsLikeValue);
      feelsLikeUnit.innerText = " F";

      windValue = wind.innerText;
      wind.innerText = toMPH(windValue);
      windUnit.innerText = " mph";
    }
  });
}
