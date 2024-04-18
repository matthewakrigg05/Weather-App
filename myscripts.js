let button = document.querySelector('#button')
let inputvalue = document.querySelector('#searchBox')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let feelsLike = document.querySelector('.feels-like');
let desc = document.querySelector('.desc');
let max = document.querySelector('.max');
let min = document.querySelector('.min');

var enterKey = document.getElementById("searchBox")

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=8dee5f5a933b8f9547bfb2b995ef2d91`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert("Invalid City Name"))
})

enterKey.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();

    document.getElementById("button").click();
    }
});


const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    feelsLike.innerText = `Feels like ${weather.main.feels_like}°C`
    max.innerText = `Maximum temperature: ${weather.main.temp_max}°C`
    min.innerText = `Minimum temperature: ${weather.main.temp_min}°C`

    desc.innerText=`${weather.weather[0].description}`
}
