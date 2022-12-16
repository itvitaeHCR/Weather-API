const myKey = config.APIkey;

document.getElementById('button1').addEventListener('click', loadMiddelburg);
document.getElementById('select-location').addEventListener('select', getLocation);

function getLocation(){
    let city = document.getElementById('select-location').value;
    console.log(city);

    switch (city) {
        case 'Middelburg':
            loadMiddelburg();
            break;
        case '0':
            break;
    }
}


// MIDDELBURG
function loadMiddelburg(){ 
    const requestMb = new XMLHttpRequest();
    requestMb.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=51.4988&lon=3.6110&units=metric&exclude=minutely,daily,alerts&appid="+myKey, true); 

    requestMb.onload = function() {
        if(this.status == 200){
            let weather = JSON.parse(this.responseText);
            console.log(weather);

            // WEATHER FORECAST FUNCTIONS HERE:
            const forecast = 

            `
            <div id="city">
            <h2>The Weather in ${weather.name} right now: </h2>
            <p id="temp"> The current temperature is ${weather.main.temp} celsius</p>
            <p id="temp"> But it rather feels like ${weather.main.feels_like} celsius</p>
            </div>
            `;

            document.getElementById('forecast').innerHTML = forecast;
        }
        else if (this.status == 404) {
            console.log('error 404');
        }
    }
    requestMb.onerror = function () {
        console.log('request error');
    }

    requestMb.send();
}