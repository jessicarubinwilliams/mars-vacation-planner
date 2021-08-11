import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js';
import PhotoService from './photo-service.js';

$('#getInfo').click(function() {
  WeatherService.getWeather()
    .then(function(response) {
      getWeatherElements(response);
    });
  PhotoService.getCuriosityPhotos()
    .then(function(response){
      getCuriosityPhotoElements(response)
      console.log(response);
    });
  PhotoService.getOpportunityPhotos()
    .then(function(response){
      getOpportunityPhotoElements(response)
      console.log(response);
    });
  PhotoService.getSpiritPhotos()
    .then(function(response){
      getSpiritPhotoElements(response)
      console.log(response);
    });
});

function getCuriosityPhotoElements(response){
  if(response.latest_photos){
    $("#curiosityPhotos").attr("src",response.latest_photos[0].img_src)
  }
}
function getOpportunityPhotoElements(response){
  if(response.latest_photos){
    $("#opportunityPhotos").attr("src",response.latest_photos[0].img_src)
  }
}
function getSpiritPhotoElements(response){
  if(response.latest_photos){
    $("#spiritPhotos").attr("src",response.latest_photos[0].img_src)
  }
}
function getWeatherElements(response) {
  if (response.sol_keys.length >= 1) {
    // const lastSol = parseInt(response.sol_keys[response.sol_keys.length-1]);
    // const responseEntries = Object.entries(response);
    // responseEntries.forEach((entry) => {
    //   if (typeof entry[1] === Array) {
    //     return;
    //   }
    //   let entryNumber = parseInt(entry[0]);
    //   let windDirection = "";
    //   let avgTemp = "";
    //   let avgPressure = "";
    //   if (entry[1].WD.most_common === null || typeof entry[1].WD.most_common.compass_point !== String ) {
    //     return windDirection = "No valid wind direction data was collected for this day.";
    //   } else if (typeof entry[1].WD.most_common === Object) {
    //     return windDirection = entry[1].WD.most_common.compass_point;
    //   } else if (entry[1].AT === null || typeof entry[1].AT.av != Number) {
    //     return avgTemp = "No valid temperature data was collected for this day.";
    //   } else if (typeof entry[1].AT.av === Number) {
    //     return avgTemp = entry[1].AT.av;
    //   } else if (entry[1].PRE === null || typeof entry[1].PRE.av != Number) {
    //     return avgPressure = "No valid atmospheric pressure data was collected for this day.";
    //   } else if (typeof entry[1].PRE.av === Number) {
    //     return avgPressure = entry[1].PRE.av;
    //   }
    //   let htmlToDisplay = `Average Temperature: ${avgTemp} degrees Fahrenheit, Average atmospheric pressure: ${avgPressure} Pa, Most common wind direction: ${windDirection}`;
    //   $("#weatherOutput").show();
    //   if (lastSol - entryNumber === 0) {
    //     console.log(`temp: ${entry[1].AT.av}`);
    //     console.log(`pressure: ${entry[1].PRE.av}`);
    //     console.log(`direction: ${entry[1].WD.most_common.compass_point}`);
    //     $('#one-day').show();
    //     $('#one-day').text(htmlToDisplay);
    //   } else if (lastSol - entryNumber === 1) {
    //     $('#two-day').show();
    //     $('#two-days').text(htmlToDisplay);
    //   } else if (lastSol - entryNumber === 2) {
    //     $('#three-day').show();
    //     $('#three-days').text(htmlToDisplay);
    //   } else if (lastSol - entryNumber === 3) {
    //     $('#four-day').show();
    //     $('#four-days').text(htmlToDisplay);
    //   } else if (lastSol - entryNumber === 4) {
    //     $('#five-day').show();
    //     $('#five-days').text(htmlToDisplay);
    //   } else if (lastSol - entryNumber === 5) {
    //     $('#six-day').show();
    //     $('#six-days').text(htmlToDisplay);
    //   } else if (lastSol - entryNumber === 6) {
    //     $('#seven-day').show();
    //     $('#seven-days').text(htmlToDisplay);
    //   }
    //   console.log(`looped`);
    // });
  } else {
    $('#showErrors').text(`Something is amiss on Mars. NASA hasn't been able to gather any weather data for the past seven days.`);
  }
}