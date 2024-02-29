let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');



button.addEventListener('click', function(){
    fetch("https://api.weatherbit.io/v2.0/current?city=${inputValue.value}&key=32165b4ed93b479c8ab5b330474d6756&include=minutely")
    .then(response => response.json())
    console.log(response)
    .then(displayData)
    .catch(err => alert("Invalid City Name"))

})

const displayData=(weather)=>{
    temp.innerText='${weather.main.temp}C'
    desc.innerText='${weather.weather[0].main}'
}



