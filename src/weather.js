let now = new Date();
let currentDate = document.querySelector("#current-date");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentDate.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let apiKey = "a6ao5dab2743f4304bbcd06edecf3td9";
  let enterCityElement = document.querySelector("#enter-city");
  let city = enterCityElement.value;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", search);
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let yourCityElement = document.querySelector("#your-city");
  yourCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
