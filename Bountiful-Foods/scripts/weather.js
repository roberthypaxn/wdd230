const currentTemp = document.getElementById("currentTemp");
const weath = document.getElementById("weath");
const humidity = document.getElementById("humidity");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=b7343d2bf8aba69528ad671e5fd70f04";
const newUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=b7343d2bf8aba69528ad671e5fd70f04";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
    const resp = await fetch(newUrl);
    if (resp.ok) {
      const dailyData = await resp.json();
      console.log(dailyData);
      displayCards(dailyData);
    } else {
      throw Error(await resp.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(weatherData) {
  // Current Temperature
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)} °F`;
  // Weather Description
  const desc = weatherData.weather[0].description;
  let newDesc = desc.split(" ").map(capitalize).join(" ");
  weath.innerHTML = newDesc;
  // Humidity
  humidity.innerHTML = `${weatherData.main.humidity}`;
}

function capitalize(s) {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

function displayCards(weatherData) {
  const divCards = document.getElementById("weather-cards");
  let indexWeather = 0  
  for (let i = 0; i < 3; i++) {
    indexWeather += 8;
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "card-weather");
    const nextDate = document.createElement("span");
    const cardCurrent = document.createElement("span");
    const cardWeath = document.createElement("span");

    nextDate.innerHTML = timeConverter(weatherData.list[indexWeather].dt);
    cardCurrent.innerHTML = `${weatherData.list[indexWeather].main.temp.toFixed(0)}°F`;
    cardWeath.innerHTML = weatherData.list[indexWeather].weather[0].main.split(" ").map(capitalize).join(" ");

    divContainer.appendChild(nextDate);
    divContainer.appendChild(cardCurrent);
    divContainer.appendChild(cardWeath);

    divCards.appendChild(divContainer);
  }
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + " " + date;
  return time;
}