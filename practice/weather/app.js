const APIKEY = 'e886ef8dccfe054cc1882ce0ecda33f1';

class LocationWeather{

  constructor(name,temperature,precipiation,wind){
    this.name = name;
    this.temperature = temperature;
    this.precipiation = precipiation;
    this.wind = wind;
  }

}


async function getWeatherByLocation(location){
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${APIKEY}`, {mode: 'cors'});
  const weatherData = await response.json();
  
  const currentLocation = new LocationWeather(location,weatherData.main.temp,weatherData.precipiation,weatherData.wind.speed);
  console.log(currentLocation);
  return;
}

