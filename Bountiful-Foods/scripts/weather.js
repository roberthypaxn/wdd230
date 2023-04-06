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
    const time = weatherData.list[i].dt_txt.split(" ");
    const date_time = document.createElement("span");
    const clock_time = document.createElement("span");
    const temp_cast = document.createElement("span");
    const humidity_cast = document.createElement("span");
    const desc_cast = document.createElement("span");

    date_time.innerHTML = `Date: ${time[0]}`;
    clock_time.innerHTML = `Time of the day: ${time[1]}`;
    temp_cast.innerHTML = `Temperature: ${weatherData.list[i].main.temp.toFixed(0)}°C`;
    humidity_cast.innerHTML = `Humidity: ${weatherData.list[i].main.humidity}`;
    desc_cast.innerHTML = weatherData.list[i].weather[0].description;

    divContainer.appendChild(date_time);
    divContainer.appendChild(clock_time);
    divContainer.appendChild(temp_cast);
    divContainer.appendChild(humidity_cast);
    divContainer.appendChild(desc_cast);

    divCards.appendChild(divContainer);
  }
}