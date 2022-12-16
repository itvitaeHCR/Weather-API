const myKey = config.APIkey;

document.getElementById('button1').addEventListener('click', loadMiddelburg);


// MIDDELBURG
function loadMiddelburg(){ 
    const requestMb = new XMLHttpRequest();
    requestMb.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=51.4988&lon=3.6110&units=metric&exclude=minutely,daily,alerts&appid="+myKey, true); 

    requestMb.onload = function() {
        if(this.status == 200){
            let weather = JSON.parse(this.responseText);
            console.log(weather);
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