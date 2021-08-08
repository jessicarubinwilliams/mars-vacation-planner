import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js';
import PhotoService from './photo-service.js';

$('#getInfo').click(function() {
  WeatherService.getWeather()
    .then(function(response) {
      console.log(response);
    });
  PhotoService.getCuriosityPhotos()
    .then(function(response){
      console.log(response);
    });
  PhotoService.getOpportunityPhotos()
    .then(function(response){
      console.log(response);
    });
  PhotoService.getSpiritPhotos()
    .then(function(response){
      console.log(response);
    });
});

function getWeatherElements(response) {
  if (response.sol_keys.length >= 1) {
    const lastSol = parseInt(response.sol_keys[response.sol_keys.length-1]);
    console.log(`lastSol: ${lastSol}`);
    console.log(`typeof lastSol ${typeof lastSol}`);
    const responseEntries = Object.entries(response);
    responseEntries.forEach((response) => {
      console.log(`response[0]: ${parseInt(response[0])}`);
      console.log(`response[response.length-1]: ${parseInt(response[response.length-1])}`);
      if (parseInt(response[0]) - lastSol === 0) {
        console.log(response[1]);
        $('#1-day').text(`${response[1]}`);
      } else {
        console.log(parseInt(response[0]) - lastSol);
      };
    });
  } else {
    $('#showErrors').text(`Something is amiss on Mars. NASA hasn't been able to gather any weather data for the past seven days`);
  }
}