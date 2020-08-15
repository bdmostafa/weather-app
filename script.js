// Handle backend Weather data ======================================
class Weather {
    constructor(city, country, apiId) {
        this.city = city;
        this.country = country;
        this.appId = apiId;
    }
    async getWeather() {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.appId}&units=metric`);
            const response = await data.json();

            console.log(response);
            // Return the essential data as an object data from the whole response data 
            return {
                location_data: [response.name, response.sys.country],
                cloudiness_data: response.clouds.all,
                main_data: response.main,
                sun_data: response.sys,
                weather_data: response.weather[0],
                wind_data: response.wind.speed
            };
        } catch (err) {
            console.log(err.message);
        }

    }
    setLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}

// Instantiate weather class
const weather = new Weather('Dhaka', 'BD', apiId)
// weather.setLocation('Los Angeles', 'US')
weather.setLocation('Edmonton', 'CA')


// Handle UI of Weather App =================================
class UI {
    constructor() {
        // Selectors ======================================================
        // day, date, location, temp, icons, time, feelings, cloudiness, humidity, pressure, sunrise, sunset, wind
        this.dayToday = document.getElementById('day-today');
        this.dateTime = document.getElementById('date-time');
        this.location = document.getElementById('location');
        this.weatherDescription = document.getElementById('weather-description');
        this.feelings = document.getElementById('feelings');
        this.temperature = document.getElementById('temperature');
        this.mainForecastIcon = document.getElementById('main-forecast-icon');
        this.cloudiness = document.getElementById('cloudiness');
        this.wind = document.getElementById('wind');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
        this.sunrise = document.getElementById('sunrise');
        this.sunset = document.getElementById('sunset');
    }

    // Print all the data on UI section of Weather App
    // paint(day, time, weather){}
    paint({
        // weather object destructuring - receiving as parameter from data argument
        location_data,
        cloudiness_data,
        // Two level destructuring on main_data
        main_data: {
            feels_like,
            temp,
            humidity,
            pressure
        },
        weather_data: {
            description,
            icon
        },
        sun_data,
        wind_data
    }) {
        // Create icon url to add into src attribute of icon img
        const iconUrl = UI.generateIcon(icon);
        this.mainForecastIcon.setAttribute('src', iconUrl);
        // Get local weak day
        this.dayToday.textContent = UI.getDay();
        // Get local date and time
        this.dateTime.textContent = UI.getTime();
        // Location - city and country
        this.location.textContent = `${location_data[0]}, ${location_data[1]}`;
        this.weatherDescription.textContent = description;
        this.feelings.innerHTML = `${feels_like}<sup>o</sup>C`;
        this.cloudiness.textContent = `${cloudiness_data}%`;
        this.temperature.innerHTML = `${temp}<sup>o</sup>C`;
        this.wind.textContent = ` ${wind_data}m/s`;
        this.humidity.textContent = `${humidity}%`;
        this.pressure.textContent = pressure;
        this.sunrise.textContent = (new Date(sun_data.sunrise)).toLocaleTimeString();
        this.sunset.textContent = (new Date(sun_data.sunset)).toLocaleTimeString();
    }
    static getTime() {
        const date = new Date();
        return `${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`;
    }
    static getDay() {
        const day = new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return `${days[day.getDay()]}`;
    }
    // Icon generate
    static generateIcon(icon) {
        // console.log(icon)
        return `http://openweathermap.org/img/w/${icon}.png`;
    }
}

// Instantiate ui
const ui = new UI();


weather.getWeather().then(data => {
    ui.paint(data);
    console.log(data)
})