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
    const forecast=document.getElementById("forecast").getElementsByTagName("div");
    const date_time=document.getElementById("date_time");

    const getData = async (event) => {
        event.preventDefault();

        if (!inputBox.value) {
            alert("Please, check the city name");
            return;
        }

        const city = inputBox.value;

         
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=92188324ce4f40d4b68100308230210&q=${city}`);
            const responseData = await response.json();

            data = responseData;

            countryName.innerText = data.location.country;
            stateName.innerText = data.location.region;
            cityName.innerText = data.location.name;
            // humidity.innerText = data.current.humidity;
            // windSpeed.innerText = data.current.wind_kph;
            temp.innerText=data.current.temp_c;
            logoImage.src=data.current.condition.icon;
            weatherStatus.innerText = data.current.condition.text;
            date_time.innerText=data.location.localtime;

            let icon=[];
            let time= [];
            let tmp=[];
        
                
                for(let k=0;k<24;k++){
                    time[k]=document.createElement("span");
                       forecast[k].style.display="flex";
                       forecast[k].style.flexDirection="column";
                       forecast[k].style.justifyContent="center";
                       forecast[k].style.justifySelf="center";
                    if(k<10){
                       
                       time[k].innerText="0"+k+":00";
                       forecast[k].appendChild(time[k]);
                       time[k].style.textAlign="center";
                    }
                    else{
                    time[k].innerText=k+":00";
                    forecast[k].appendChild(time[k]);
                    time[k].style.textAlign="center";
                    }
                    
                    icon[k]=document.createElement("img");
                    icon[k].src=data.forecast.forecastday[0].hour[k].condition.icon;
                    forecast[k].appendChild(icon[k]);

                    tmp[k]=document.createElement("span");
                    tmp[k].innerText=data.forecast.forecastday[0].hour[k].temp_c + " °C";
                    forecast[k].appendChild(tmp[k]);
                    tmp[k].style.textAlign="center";


                }              

        
        }

    const form = document.querySelector("form");
    form.addEventListener("submit", getData);
});
