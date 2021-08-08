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
  PhotoService.getPhoto()
    .then(function(response){
      console.log(response);
    });
});