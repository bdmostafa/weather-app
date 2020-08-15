// API
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c26c6010e343573d2391962f7361a387&units=metric

// Handle backend Weather data ======================================
class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appId = 'c26c6010e343573d2391962f7361a387';
    }
    async getWeather() {
        try {
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.appId}&units=metric`);
            const response = await data.json();
            console.log(response);
            // Return the essential data as an object from the whole response data 
            return {
                location_data: [response.name, response.sys.country],
                main_data: response.main,
                sun_data: response.sys,
                weather_data: response.weather[0],
                wind_data: response.wind
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

const weather = new Weather('Dhaka', 'BD')
weather.setLocation('Los Angeles', 'US')
weather.setLocation('Edmonton', 'CA')

weather.getWeather().then(data => {
    console.log(data)
})