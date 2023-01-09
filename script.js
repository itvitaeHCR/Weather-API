const myKey = config.APIkey;

document.getElementById('button1').addEventListener('click', loadMiddelburg);
document.getElementById('select-location').addEventListener('select', getLocation);

function getLocation(){
    let city = document.getElementById('select-location').value;
    console.log(city);

    switch (city) {
        case 'Middelburg':
            loadCurrent(51.4988, 3.6110);
            loadForecast(51.4988, 3.6110);
            break;
        case 'Vlissingen':
            loadCurrent(51.4537, 3.5709);
            loadForecast(51.4537, 3.5709);
            break;
        case 'Nice':
            loadCurrent(43.7102, 7.2620);
            loadForecast(43.7102, 7.2620);
            break;
        case "Jönköping":
            loadCurrent(57.7826, 14.1618);
            loadForecast(57.7826, 14.1618);
            break;
        case "Utrecht":
            loadCurrent(52.0907, 5.1214);
            loadForecast(52.0907, 5.1214);
            break;
        case '0':
            break;
    }
    giveZero();
}


  
function giveZero() {
    setTimeout(() => {
        document.getElementById("select-location").value = 0;
      }, "1000")
}


// CURRENT
function loadCurrent(lat, lon){ 
    const requestCurrent = new XMLHttpRequest();
    requestCurrent.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&exclude=minutely,daily,alerts&appid="+myKey, true); 

    requestCurrent.onload = function() {
        if(this.status == 200){
            let weather = JSON.parse(this.responseText);
            console.log("weather");
            console.log(weather);

            // WEATHER FORECAST FUNCTIONS HERE:
            const current = 

            `
            <div id="city" style="background-color:#59a2deb0">
            <h2>The Weather in ${weather.name} right now: </h2>
            <p class="temp"> The current temperature is ${weather.main.temp} celsius</p>
            <p class="temp"> But it rather feels like ${weather.main.feels_like} celsius</p>
            </div>
            `;

            document.getElementById('current').innerHTML = current;
        }
        else if (this.status == 404) {
            console.log('error 404');
        }
    }
    requestCurrent.onerror = function () {
        console.log('request error');
    }

    requestCurrent.send();
}


// FORECAST
function loadForecast(lat, lon){ 
    const requestForecast = new XMLHttpRequest();
    requestForecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=metric&cnt=24&appid="+myKey, true); 

    requestForecast.onload = function() {
        if(this.status == 200){
            let weatherForecast = JSON.parse(this.responseText);
            console.log("weatherForecast");
            console.log(weatherForecast);

            // WEATHER FORECAST FUNCTIONS HERE:
            
            let forecast = ``;
            for (let i = 0; i < 24; i++) {
            
                let addition =
            `
            <div id="city" style="background-color:#59a2deb0">
            <h3>The Weather at ${weatherForecast.list[i].dt_txt}: </h3>
            <p class="temp"> Temperature: ${weatherForecast.list[i].main.temp} Celsius</p>
            <p class="temp"> (Feels like: ${weatherForecast.list[i].main.feels_like} Celsius)</p>
            <p class="wind"> Wind: ${weatherForecast.list[i].wind.speed} m/s</p>
            <p class="desc"> General vibe: ${weatherForecast.list[i].weather[0].description}</p>
            </div>
            `;

            forecast += addition;
            }

            document.getElementById('forecast').innerHTML = forecast;
        }
        else if (this.status == 404) {
            console.log('error 404');
        }
    }
    requestForecast.onerror = function () {
        console.log('request error');
    }

    requestForecast.send();
}
