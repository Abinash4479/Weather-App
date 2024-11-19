const apiKey = 'your_api_key_here'; // Replace with your OpenWeather API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    fetchWeather(city);
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Weather: ${data.weather[0].description}`;
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Something went wrong. Please try again later.');
        });
}
