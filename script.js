const myKey = config.APIkey;
const request = new XMLHttpRequest();
request.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=51.4988&lon=3.6110&units=metric&exclude=minutely,daily,alerts&appid="+myKey, true); // MIDDELBURG
//request.open("GET", "https://jsonplaceholder.typicode.com/users") // FROM TUTORIAL
request.send();
request.onload = () => {
    console.log(request)
};