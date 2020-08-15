// Handle local storage part =============================
class Store {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Dhaka';
        this.defaultCountry = 'BD';
    }
    getLocation() {
        // Get city from local storage
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city')
        }

        // Get country from local storage
        if (localStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('country')
        }
        return {
            city: this.city,
            country: this.country
        }
    }
    setLocation(city, country) {
        console.log(city, country)
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}