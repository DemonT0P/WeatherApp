import "./styles/style.scss";
import "./styles/header.scss";
import "./styles/content.scss";

//https://icons8.com/icon/3096/menu

document.querySelector("#app").innerHTML = `
<div class="weather__header">
<div class="header__title">Weather App</div>
<form class="header__form">
  <input class="form__input">
  <button class="form__button">Search</button>
</form>
</div>
<div class="weather__content-wrapper">
<div class="weather__content">
  <div class="content__city-info">
    <span class="city-info__status">Mostly Sunny</span>
    <span class="city-info__name">Rio de Janeiro, Rio de Janeiro</span>
  </div>
  <div class="content__temp-info">
    <div class="temp-info__wrapper-left">
      <div class="temp-info__temp-value">17</div>
      <div class="temp-info__units">
        <span class="units__C">C</span>
        <span class="units__division">|</span>
        <span class="units__F">F</span>
      </div>
    </div>

    <div class="temp-info__wrapper-right">
      <div class="temp-info__feels-like">FEELS LIKE: <span class="feels-like__value">20</span><span class="feels-like__unit"> C</span></div>
      <div class="temp-info__wind">WIND: <span class="wind__value">5</span><span class="wind__unit"> kph</span></div>
      <div class="temp-info__humidity">HUMIDITY: <span class="humidity__value">65</span>%</div>
    </div>
</div>
</div>
`;

function Temp(condition, city, region, temp, feelsLike, wind, humidity) {
  return { condition, city, region, temp, feelsLike, wind, humidity };
}

async function getInfo(url) {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1feaf2a99a2145f391a203036231309&q=${url}`
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

async function addToDom(info) {
  document.querySelector(".city-info__status").innerText = info.condition;
  document.querySelector(".city-info__name").innerText =
    info.city + ", " + info.region;
  document.querySelector(".temp-info__temp-value").innerText = info.temp[0];
  document.querySelector(".feels-like__value").innerText = info.feelsLike[0];
  document.querySelector(".wind__value").innerText = info.wind[0];
  document.querySelector(".humidity__value").innerText = info.humidity;
}

let form = document.querySelector(".header__form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getInfo(document.querySelector(".form__input").value);
});
