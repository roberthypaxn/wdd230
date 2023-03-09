let t = 5;
let fahrenheit = (t - 32) * (5/9);
/*const temp = document.querySelector(".temp");
temp.innerHTML =`${t}°C`
*/
/*let km_h = 4.7;
const windSpeed = document.querySelector("#windSpeed");
windSpeed.innerHTML = `${km_h} Km/h`
let mph = km_h/1.609;

const windChill = 35.074 + (0.6215* fahrenheit) - (35.75* (mph**0.16)) + 0.4275*(fahrenheit*(mph**0.16))
const weatherChill = document.querySelector("#windChill");
weatherChill.innerHTML = windChill;*/

// select HTML elements in the document
const temp = document.querySelector(".temp");
const weatherIcon = document.querySelector("#wheather-icon");
const captionDesc = document.querySelector(".wheather-description");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-1.4998&lon=29.635&units=metric&appid=8633852aefcacbfa429c5839142459db';

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
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>` + "°C";
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const wSpeed = weatherData.wind.speed;
    const wChill = weatherData.main.feels_like;

    windSpeed.textContent = wSpeed + " Km/h";
    windChill.textContent = wChill;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}