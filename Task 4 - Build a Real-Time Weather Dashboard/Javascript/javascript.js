// my weather app api key 
const apiKey = "586765800825aed328eb1cbc21d5aa1b";


const weatherMapping = {
    "Clear": "day.svg",
    "Clouds": "cloudy.svg",
    "Rain": "rainy-1.svg",
    "Drizzle": "rainy-4.svg",
    "Thunderstorm": "thunder.svg",
    "Snow": "snowy-1.svg",
    "Mist": "weather.svg"
};

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const display = document.getElementById("weatherResult");
    const forecastDisplay = document.getElementById("forecastResult");

    if (!city) return;

    // Loading states
    display.innerHTML = "Loading...";
    forecastDisplay.innerHTML = "";

    // weather API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const fResponse = await fetch(forecastUrl);
        const fData = await fResponse.json();

            if (data.cod === "404") {
            display.innerHTML = "City not found!";
            return;
         }

        if (response.ok) {
            const condition = data.weather[0].main;
            const iconFile = weatherMapping[condition] || "weather.svg";
            const iconPath = `./assets/weather%20icons/static/${iconFile}`;

            display.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${iconPath}" width="80">
                <h1>${Math.round(data.main.temp)}°C</h1>
                <p>${data.weather[0].description}</p>
                <p style="font-size: 0.9rem; opacity: 0.8;">Feels like: ${Math.round(data.main.feels_like)}°C</p>
            `;

            // Forecast logic
            const dailyData = fData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
            
            dailyData.forEach(day => {
                const fCondition = day.weather[0].main;
                const fIconFile = weatherMapping[fCondition] || "weather.svg";
                const fIconPath = `./assets/weather%20icons/static/${fIconFile}`;
                const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });

                forecastDisplay.innerHTML += `
                    <div class="forecast-card">
                        <p>${date}</p>
                        <img src="${fIconPath}" width="35">
                        <p>${Math.round(day.main.temp)}°C</p>
                    </div>
                `
            })

        } else {
            display.innerHTML = "City not found!";
        }
    } catch (error) {
        display.innerHTML = "Error loading data.";
        console.log(error);
    }
}
/* user can now click the search button or hit Enter on keyboard */
document.getElementById("searchBtn").addEventListener("click", getWeather);
document.getElementById("searchBtn").addEventListener("click", getWeather);

document.getElementById("cityInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        getWeather();
    }
});