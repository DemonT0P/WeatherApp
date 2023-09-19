import { getBackgroundPic } from "./API";

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
