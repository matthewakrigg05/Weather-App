let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=8dee5f5a933b8f9547bfb2b995ef2d91`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert("Invalid City Name"))

})

const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}C`
    desc.innerText=`${weather.weather[0].main}`
}
