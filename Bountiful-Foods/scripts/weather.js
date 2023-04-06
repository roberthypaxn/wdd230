const temp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#w-icon");
const weatherDesc = document.querySelector("#weather-description");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=8633852aefcacbfa429c5839142459db";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=3&units=imperial&appid=8633852aefcacbfa429c5839142459db";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
      const resp = await fetch(forecastUrl);
      if (resp.ok) {
        const forecastData = await resp.json();
        console.log(forecastData);
        displayForecast(forecastData);
      } else {
      throw Error(await resp.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>` + "°C";
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}
function displayForecast(weatherData) {
  const divCards = document.getElementById("weather-cards");
  for (let i = 0; i < 3; i++) {
    
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "card-weather");
    const forecast1 = document.createElement("span");
    const forecast2 = document.createElement("span");
    const forecast3 = document.createElement("span");

    forecast1.innerHTML = weatherData.list[i].dt_txt;
    forecast2.innerHTML = `${weatherData.list[i].main.temp.toFixed(0)}°C`;
    forecast3.innerHTML = weatherData.list[i].weather[0].description;

    divContainer.appendChild(forecast1);
    divContainer.appendChild(forecast2);
    divContainer.appendChild(forecast3);

    divCards.appendChild(divContainer);
  }
}