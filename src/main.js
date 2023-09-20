import "./styles/style.scss";
import "./styles/header.scss";
import "./styles/content.scss";
import { getTemp, getUserLocation } from "./scripts/API";
import { startEventListeners } from "./scripts/Dom";

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
      <div class="temp-info__temp-value">17<span class="temp-value__unit">C</span></div>
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

getUserLocation();
startEventListeners();
