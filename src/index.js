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
    $("#curiosityPhotos").attr("src",response.latest_photos[0].img_src);
  }
}

function getOpportunityPhotoElements(response){
  if(response.latest_photos){
    $("#opportunityPhotos").attr("src",response.latest_photos[0].img_src);
  }
}

function getSpiritPhotoElements(response){
  if(response.latest_photos){
    $("#spiritPhotos").attr("src",response.latest_photos[0].img_src);
  }
}

function getWeatherElements(response) {
  if (response.sol_keys.length >= 1) {
    const lastSol = parseInt(response.sol_keys[response.sol_keys.length-1]);
    console.log(lastSol);
    const responseEntries = Object.entries(response);
    responseEntries.forEach((entry) => {
      if (entry[0] === "sol_keys" || entry[0] === "validity_checks") {
        return;
      } else {
        const entrySol = parseInt(entry[0]);
        console.log(entrySol);
        let windDirection = "";
        let avgTemp = "";
        let avgPressure = "";
        if (entry[1].WD.most_common === null || typeof entry[1].WD.most_common.compass_point !== "string" ) {
          console.log("Something amiss with WD section of API response.");
          windDirection = "No valid wind direction data was collected for this day.";
          console.log(windDirection);
        } else if (entry[1].WD.most_common !== null) {
          console.log("Wind direction response okay.");
          windDirection = entry[1].WD.most_common.compass_point;
          console.log(windDirection);
        } if (entry[1].AT === null || typeof entry[1].AT.av !== "number") {
          console.log("Something amiss with AT section of API response.");
          avgTemp = "No valid temperature data was collected for this day.";
          console.log(avgTemp);
        } else if (typeof entry[1].AT.av === "number") {
          console.log("Temperature AT response okay.");
          avgTemp = entry[1].AT.av;
          console.log(avgTemp);
        } if (entry[1].PRE === null || typeof entry[1].PRE.av !== "number") {
          console.log("Something amiss with PRE section of API response.");
          avgPressure = "No valid atmospheric pressure data was collected for this day.";
          console.log(avgPressure);
        } else if (typeof entry[1].PRE.av === "number") {
          console.log("Pressure response okay.");
          avgPressure = entry[1].PRE.av;
          console.log(avgPressure);
        }
        // let htmlToDisplay = `Average Temperature: ${avgTemp} degrees Fahrenheit, Average atmospheric pressure: ${avgPressure} Pa, Most common wind direction: ${windDirection}`;
        // $("#weatherOutput").show();
        // if (lastSol - entrySol === 0) {
        //   console.log(`temp: ${entry[1].AT.av}`);
        //   console.log(`pressure: ${entry[1].PRE.av}`);
        //   console.log(`direction: ${entry[1].WD.most_common.compass_point}`);
        //   $('#one-day').show();
        //   $('#one-day').text(htmlToDisplay);
        // } else if (lastSol - entrySol === 1) {
        //   $('#two-day').show();
        //   $('#two-days').text(htmlToDisplay);
        // } else if (lastSol - entrySol === 2) {
        //   $('#three-day').show();
        //   $('#three-days').text(htmlToDisplay);
        // } else if (lastSol - entrySol === 3) {
        //   $('#four-day').show();
        //   $('#four-days').text(htmlToDisplay);
        // } else if (lastSol - entrySol === 4) {
        //   $('#five-day').show();
        //   $('#five-days').text(htmlToDisplay);
        // } else if (lastSol - entrySol === 5) {
        //   $('#six-day').show();
        //   $('#six-days').text(htmlToDisplay);
        // } else if (lastSol - entrySol === 6) {
        //   $('#seven-day').show();
        //   $('#seven-days').text(htmlToDisplay);
        // }
      }
      console.log(`looped`);
    });
  } else {
    $('#showErrors').text(`Something is amiss on Mars. NASA hasn't been able to gather any weather data for the past seven days.`);
  }
}