const APIKEY = 'e886ef8dccfe054cc1882ce0ecda33f1';
const container = document.getElementById('container');

class LocationWeather{

  constructor(name,temperature,precipiation,wind){
    this.name = name;
    this.temperature = temperature;
    this.precipiation = precipiation;
    this.wind = wind;
  }

  createInformationDiv(){
    var weatherDisplay = document.createElement('div');
    weatherDisplay.setAttribute('id','weatherInformation');

    weatherDisplay.innerHTML = `
    <h1>${this.name}</h1>
    <h2>Temperature: ${this.temperature} F</h2>
    <h2>Precipiation: ${this.precipiation} in</h2>
    <h2>Wind Speed: ${this.wind} mph</h2>`;

    return weatherDisplay;
  }

}

async function getWeatherByLocation(location,callback){

  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${APIKEY}`, {mode: 'cors'});
  const weatherData = await response.json();  
  const currentLocation = new LocationWeather(location,weatherData.main.temp,weatherData.precipiation,weatherData.wind.speed);
  console.log(weatherData);
  callback(currentLocation);

  return currentLocation;
}

function displayWeatherInfo(currentLocation){
  var informationDiv = currentLocation.createInformationDiv();
  container.appendChild(informationDiv);
}

function createSearchField(){
  const searchField = document.createElement('input');
  searchField.setAttribute('type','text');
  searchField.setAttribute('placeholder','City...');
  searchField.setAttribute('id','searchBar');
  container.appendChild(searchField);
}

function createSubmitButton(){
  const submitButton = document.createElement('button');
  submitButton.setAttribute('id','submitButton');
  submitButton.innerText = 'Submit';
  submitButton.addEventListener('click', () => {
    getWeatherByLocation(retrieveInput(),displayWeatherInfo);
    replaceWeatherDiv();
  });
  container.appendChild(submitButton);
}

function replaceWeatherDiv(){
  const weatherDiv = document.getElementById('weatherInformation')
  
  if(weatherDiv){
    weatherDiv.replaceWith()
  }
}

function retrieveInput(){
  const searchField = document.getElementById('searchBar');
  return searchField.value;
}

function initialLoad(){
  createSearchField();
  createSubmitButton();
}

initialLoad();