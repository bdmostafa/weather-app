// Handle backend Weather data ======================================
export default class Weather {
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
            alert(`Your spelling is not matched. Please try again with a right spelling.`)
        }
    }
    // Change the existing location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}