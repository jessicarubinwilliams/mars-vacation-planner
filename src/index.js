import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import WeatherService from './weather-service.js';
import PhotoService from './photo-service.js';
import { marsWeatherApiResponse } from './project-development-notes.js';

$('#getInfo').click(function() {
  // WeatherService.getWeather();
    // .then(function(response) {
    //   getWeatherElements(response);
    // });
    // 
    getWeatherElements(marsWeatherApiResponse);
  PhotoService.getCuriosityPhotos()
    .then(function(response){
      getCuriosityPhotoElements(response);
    });
  PhotoService.getOpportunityPhotos()
    .then(function(response){
      getOpportunityPhotoElements(response);
    });
  PhotoService.getSpiritPhotos()
    .then(function(response){
      getSpiritPhotoElements(response);
    });
});

function getCuriosityPhotoElements(response){
  if(response.latest_photos){
    $("#curiosity").show();
    $("#curiosityPhotos").attr("src",response.latest_photos[0].img_src);
  }
}

function getOpportunityPhotoElements(response){
  if(response.latest_photos){
    $("#opportunity").show();
    $("#opportunityPhotos").attr("src",response.latest_photos[0].img_src);
  }
}

function getSpiritPhotoElements(response){
  if(response.latest_photos){
    $("#spirit").show();
    $("#spiritPhotos").attr("src",response.latest_photos[0].img_src);
  }
}

function getWeatherElements(response) {
  if (response.sol_keys.length >= 1) {
    const lastSol = parseInt(response.sol_keys[response.sol_keys.length-1]);
    const responseEntries = Object.entries(response);
    responseEntries.forEach((entry) => {
      if (entry[0] === "sol_keys" || entry[0] === "validity_checks") {
        return;
      } else {
        const entrySol = parseInt(entry[0]);
        let windDirection = "";
        let avgTemp = "";
        let avgPressure = "";
        if (entry[1].WD.most_common === null || typeof entry[1].WD.most_common.compass_point !== "string" ) {
          windDirection = "No valid wind direction data was collected for this day.";
        } else if (entry[1].WD.most_common !== null) {
          windDirection = entry[1].WD.most_common.compass_point;
        } if (entry[1].AT === null || typeof entry[1].AT.av !== "number") {
          avgTemp = "No valid temperature data was collected for this day.";
        } else if (typeof entry[1].AT.av === "number") {
          avgTemp = entry[1].AT.av;
        } if (entry[1].PRE === null || typeof entry[1].PRE.av !== "number") {
          avgPressure = "No valid atmospheric pressure data was collected for this day.";
        } else if (typeof entry[1].PRE.av === "number") {
          avgPressure = entry[1].PRE.av;
        }
        let htmlToDisplay = `Average Temperature: ${avgTemp} degrees Fahrenheit, Average atmospheric pressure: ${avgPressure} Pa, Most common wind direction: ${windDirection}`;
        $("#weatherOutput").show();
        if (lastSol - entrySol === 0) {
          $('#one-day').show();
          $('#one-day').append(htmlToDisplay);
        } else if (lastSol - entrySol === 1) {
          $('#two-days').show();
          $('#two-days').append(htmlToDisplay);
        } else if (lastSol - entrySol === 2) {
          $('#three-days').show();
          $('#three-days').append(htmlToDisplay);
        } else if (lastSol - entrySol === 3) {
          $('#four-days').show();
          $('#four-days').append(htmlToDisplay);
        } else if (lastSol - entrySol === 4) {
          $('#five-days').show();
          $('#five-days').append(htmlToDisplay);
        } else if (lastSol - entrySol === 5) {
          $('#six-days').show();
          $('#six-days').append(htmlToDisplay);
        } else if (lastSol - entrySol === 6) {
          $('#seven-days').show();
          $('#seven-days').append(htmlToDisplay);
        }
      }
    });
  } else {
    $('#showErrors').text(`Something is amiss on Mars. NASA hasn't been able to gather any weather data for the past seven days.`);
  }
}