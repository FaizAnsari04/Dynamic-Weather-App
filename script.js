const container =document.querySelector('.container');
const search =document.querySelector('.search-box button');
const weatherBox=document.querySelector(',weather-box');
const weatherDetails= document.querySelector('.weather-details');
search.addEventListener('click',()=>
{
    const APIKey='fa06af5e6cd8f3a18161c41aa37b5910';
    const city= document.querySelector('.search-box input').ariaValueMax;
    if (city=='')
    return;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units-metric&appid={APIKey}`).then(response => response.json()).then(json=>
{
    
const image= document.querySelector('.weather-box img');
const temp= document.querySelector('.weather-box .temp');
const desc= document.querySelector('.weather-box .desc');
const humidity= document.querySelector('.weather-details .humidity span');
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