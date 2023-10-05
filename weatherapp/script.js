document.addEventListener("DOMContentLoaded", function () {
    let data;

    const inputBox = document.getElementById("inputBox");
    const countryName = document.getElementById("countryName");
    const stateName = document.getElementById("stateName");
    const cityName = document.getElementById("cityName");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const temp = document.getElementById("temp");
    const logoImage=document.getElementById("logoImage");
    const weatherStatus = document.getElementById("weatherStatus");

    const getData = async (event) => {
        event.preventDefault();

        if (!inputBox.value) {
            alert("Please, check the city name");
            return;
        }

        const city = inputBox.value;

         
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=92188324ce4f40d4b68100308230210&q=${city}`);
            const responseData = await response.json();

            data = responseData;

            countryName.innerText = data.location.country;
            stateName.innerText = data.location.region;
            cityName.innerText = data.location.name;
            humidity.innerText = data.current.humidity;
            windSpeed.innerText = data.current.wind_kph;
            temp.innerText = data.current.temp_c;
            logoImage.src=data.current.condition.icon;
            weatherStatus.innerText = data.current.condition.text;

      
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", getData);
});
