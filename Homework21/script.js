const button = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weather");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  const cityName = "LVIV";
  const apiKey = "5d066958a60d315387d9492393935c19";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const temperature = response.main.temp;
      const pressure = response.main.pressure;
      const description = response.weather[0].description;
      const humidity = response.main.humidity;
      const windSpeed = response.wind.speed;
      const windDeg = response.wind.deg;
      const iconCode = response.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      const weatherHTML = `
        <p>Температура: ${temperature}°C</p>
        <p>Тиск: ${pressure} гПа</p>
        <p>Опис: ${description}</p>
        <p>Вологість: ${humidity}%</p>
        <p>Швидкість вітру: ${windSpeed} м/с</p>
        <p>Напрям вітру: ${windDeg}°</p>
        <img src="${iconUrl}" alt="${description}">
      `;
      weatherDiv.innerHTML = weatherHTML;
    }
  };

  xhr.open("GET", url);
  xhr.send();
});
