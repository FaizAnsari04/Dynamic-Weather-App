const container =document.querySelector('.container');
const search =document.querySelector('.search-box button');
const weatherBox=document.querySelector(',weather-box');
const weatherDetails= document.querySelector('.weather-details');
search.addEventListener('click',()=>
{
    const APIKey='e59f85aad2d82682c04936a5f151a6de';
    const city= document.querySelector('.search-box input').ariaValueMax;
    if (city=='')
    return;
fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}%units=metric&appid=${APIkey}').then(response=> response.json()).then(json=>{
    
const image= document.querySelector('.weather-box img');
const temperature= document.querySelector('.weather-box .temp');
const description= document.querySelector('.weather-details .desc');
const humi= document.querySelector('.weather-box .humidity span');
const wind= document.querySelector('.weather-details .wind span');

switch(json.weather[0].main)
{
        case 'Clear':
           image.src="Images/Sunny.png";
           break;

        case 'Cloud':
            image.src="Images/Cloud.png";
            break;

        case 'Haze':
            image.src="Images/mist.png";
            break;
        case 'Rain':
            image.src="Images/rain.png";
            break;

        case 'Snow':
            image.src="Images/Snow.png";
        break;

    default:
        
}


});
});