const apikey="2a6621c3cf13d0e3d188f11c8c25b39f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var weatherimage = document.querySelector('.weather-image');
async function CheckWeather(city){
    const response = await fetch(apiurl + city + ` &appid=${apikey} `);
    

    if(response.status == 404){
        document.querySelector('.err').style.display= 'block';
    }
    else{
        var data = await response.json();
        document.querySelector(".place").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round( data.main.temp)  + '°c';
        document.querySelector(".humidity").innerHTML=data.main.humidity + ' %';
        document.querySelector(".wind-speed").innerHTML=data.wind.speed + ' km/h';
        if(data.weather[0].main=="Clouds"){
            weatherimage.src='images/cloudy.png'
        }
        else if(data.weather[0].main=="Clear"){
            weatherimage.src='images/sun.png'
        }
        else if(data.weather[0].main=="Rain"){
            weatherimage.src='images/heavy rain.png'
        }
        else if(data.weather[0].main=="Mist"){
            weatherimage.src='images/rain.png'
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherimage.src='images/rainy.png'
        }
        document.querySelector('.err').style.display = 'none';
    }

    
}
var searchvalue = document.querySelector('.search-bar');
var searchbtn = document.querySelector('.searchbtn');
searchbtn.addEventListener('click',()=>{
    CheckWeather(searchvalue.value);
    document.querySelector('.search-bar').value =''
})
