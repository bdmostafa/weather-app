// Instantiate Store
const store = new Store();

// Instantiate ui
const ui = new UI();

// Object destructuring that is from store.getLocation()'s return
const {
    city,
    country
} = store.getLocation();
// console.log(store.getLocation()); // {city: null, country: null}
// console.log(city, country); // null null (both are same)


// Instantiate weather class
const weather = new Weather(city, country, apiId)

function weatherData() {
    weather
        .getWeather()
        .then(data => {
            ui.paint(data);
            // console.log(data)
        })
        .catch(err => {
            alert(`Oops! Your city is not found.`)
        })
}


// Event Listeners =====================================================
// weatherData() executes when browser reloaded
document.addEventListener('DOMContentLoaded', weatherData);
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    if (city === '' || country === '') {
        alert("Please provide necessary information");
    } else {
        weather.changeLocation(city, country);
        UI.clearField();
        weatherData();
    }
})