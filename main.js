
let btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
let city = document.querySelector(".inp").value;


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70e1ed322b02acbc57d443dd91065f3e`)
.then(r =>r.json())
.then(object=>console.log(object))
.catch(error => error);
})
