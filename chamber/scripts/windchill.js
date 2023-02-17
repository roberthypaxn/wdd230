let t = 5;
let fahrenheit = (t - 32) * (5/9);
const temp = document.querySelector(".temp");
temp.innerHTML =`${t}°C`

let km_h = 4.7;
const windSpeed = document.querySelector("#windSpeed");
windSpeed.innerHTML = `${km_h} Km/h`
let mph = km_h/1.609;

const windChill = 35.074 + (0.6215* fahrenheit) - (35.75* (mph**0.16)) + 0.4275*(fahrenheit*(mph**0.16))
const weatherChill = document.querySelector("#windChill");
weatherChill.innerHTML = windChill;
