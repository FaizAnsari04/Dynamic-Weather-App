
/**const container = document.querySelector('.container');
const Searchbtn = document.getElementById('Searchbtn');
const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const windspeed= document.getElementById('windspeed');

async function checkWeather(city)
{
    const api_key="fa06af5e6cd8f3a18161c41aa37b5910";
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response=> response.json());
    
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temp.innerHTML=`${Math.round(weather_data.main.temp-273-15)}C`;
    desc.innerHTML=`${weather_data.weather[0].desc}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windspeed.innerHTML=`${weather_data.main.windspeed} Km/H`;


}


Searchbtn.addEventListener ('click',()=>{
    checkWeather(container.value);

})
     switch(weather_data.weather[0].main)
    {
        case 'Clouds':
            weather_img.src = "/Images/Cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/Images/Sunny.png";
            break;
        case 'Rain':
            weather_img.src = "/Images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/Images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/Images/Snow.png";
            break;

    }

    console.log(weather_data);

**/


const container = document.querySelector('.container');
const Searchbtn = document.getElementById('Searchbtn');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const weather_img = document.querySelector('.weather-box img');

async function checkWeather(city) {
    const api_key = "fa06af5e6cd8f3a18161c41aa37b5910";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
        const weather_data = await fetch(api_url).then(response => response.json());

        if (weather_data.cod === `404`) {
            throw new Error("City not found");
        }

        temp.innerHTML = `${Math.round(weather_data.main.temp - 273 - 15)}C`;
        desc.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        windspeed.innerHTML = `${weather_data.wind.speed} Km/H`;

        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "/Images/Cloud.png";
                break;
            case 'Clear':
                weather_img.src = "/Images/Sunny.png";
                break;
            case 'Rain':
                weather_img.src = "/Images/rain.png";
                break;
            case 'Mist':
                weather_img.src = "/Images/mist.png";
                break;
            case 'Snow':
                weather_img.src = "/Images/Snow.png";
                break;
            default:
                // Handle other weather conditions if needed
        }
    } catch (error) {
        console.error(error.message);
        // Handle the error, for example, display a message to the user
    }
}

Searchbtn.addEventListener('click', () => {
    checkWeather(container.value);
});
