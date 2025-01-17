// Replace with your OpenWeatherMap API key
const API_KEY = '1c870dc5fa854aa22168595735fd863a';

// Function to fetch weather data from OpenWeatherMap
function getWeather() {
  const city = document.getElementById('city').value;
  
  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then(response => {
        alert(url);
        if (!response.ok) {
          throw new Error('City not found or invalid request');
        }
        return response.json();
      })
      .then(data => {
        // Parsing and displaying weather data
        const description = data.weather[0].description;
        const temperature = data.main.temp;

        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error fetching weather data');
      });
  } else {
    alert('Please enter a city name');
  }
}
