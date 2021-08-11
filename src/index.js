import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import WeatherService from './weather-service.js';
// import PhotoService from './photo-service.js';

const response = {
  sol_keys: [ "259", "260", "261", "262", "263", "264", "265" ],
  259: {
    AT: { 
      av: -71.233,
      ct: 326642,
      mn: -101.024,
      mx: -27.149
    },
    HWS: {
      av: 4.35,
      ct: 154146,
      mn: 0.156,
      mx: 17.617
    },
    PRE: {
      av: 761.006,
      ct: 163012,
      mn: 742.1498,
      mx: 780.3891
    },
    WD: {
      most_common: { 
        compass_degrees: 202.5,
        compass_point: "SSW",
        compass_right: -0.382683432365,
        compass_up: -0.923879532511,
        ct: 28551
      },
      8: {
        compass_degrees: 180.0,
        compass_point: "S",
        compass_right: 0.0,
        compass_up: -1.0,
        ct: 17699
      },
      9: {
        compass_degrees: 202.5,
        compass_point: "SSW", 
        compass_right: -0.382683432365,
        compass_up: -0.923879532511,
        ct: 28551 }, 
      10: {
        compass_degrees: 225.0,
        compass_point: "SW",
        compass_right: -0.707106781187,
        compass_up: -0.707106781187,
        ct: 27124
      }
    },
    First_UTC: "2019-08-19T08:03:59Z",
    Last_UTC: "2019-08-20T08:43:34Z",
    Season: "winter"
  },
  260: {
    AT: {
      av: -75.95,
      ct: 300789,
      mn: -101.715,
      mx: -28.634
    },
    PRE: {
      av: 762.462,
      ct: 149206,
      mn: 741.1254,
      mx: 777.796
    },
    WD: { 
      most_common: null
    },
    First_UTC: ":2019-08-20T08:43:34Z",
    Last_UTC: "2019-08-21T09:23:09Z",
    Season: "winter"
  }
};

$('#getInfo').click(function() {
  getWeatherElements(response);
  // WeatherService.getWeather()
  //   .then(function(response) {
  //     getWeatherElements(response);
  //   });
  // PhotoService.getCuriosityPhotos()
  //   .then(function(response){
  //     console.log(response);
  //   });
  // PhotoService.getOpportunityPhotos()
  //   .then(function(response){
  //     console.log(response);
  //   });
  // PhotoService.getSpiritPhotos()
  //   .then(function(response){
  //     console.log(response);
  //   });
});

function getWeatherElements(response) {
  if (response.sol_keys.length >= 1) {
    const lastSol = parseInt(response.sol_keys[response.sol_keys.length-1]);
    const responseEntries = Object.entries(response);
    responseEntries.forEach((entry) => {
      if (typeof entry[1] === Array) {
        return;
      }
      let entryNumber = parseInt(entry[0]);
      let windDirection = "";
      let avgTemp = "";
      let avgPressure = "";
      if (entry[1].WD.most_common === null || typeof entry[1].WD.most_common.compass_point !== String ) {
        return windDirection = "No valid wind direction data was collected for this day.";
      } else if (typeof entry[1].WD.most_common === Object) {
        return windDirection = entry[1].WD.most_common.compass_point;
      } else if (entry[1].AT === null || typeof entry[1].AT.av != Number) {
        return avgTemp = "No valid temperature data was collected for this day.";
      } else if (typeof entry[1].AT.av === Number) {
        return avgTemp = entry[1].AT.av;
      } else if (entry[1].PRE === null || typeof entry[1].PRE.av != Number) {
        return avgPressure = "No valid atmospheric pressure data was collected for this day.";
      } else if (typeof entry[1].PRE.av === Number) {
        return avgPressure = entry[1].PRE.av;
      }
      let htmlToDisplay = `Average Temperature: ${avgTemp} degrees Fahrenheit, Average atmospheric pressure: ${avgPressure} Pa, Most common wind direction: ${windDirection}`;
      $("#weatherOutput").show();
      if (lastSol - entryNumber === 0) {
        console.log(`temp: ${entry[1].AT.av}`);
        console.log(`pressure: ${entry[1].PRE.av}`);
        console.log(`direction: ${entry[1].WD.most_common.compass_point}`);
        $('#one-day').show();
        $('#one-day').text(htmlToDisplay);
      } else if (lastSol - entryNumber === 1) {
        $('#two-day').show();
        $('#two-days').text(htmlToDisplay);
      } else if (lastSol - entryNumber === 2) {
        $('#three-day').show();
        $('#three-days').text(htmlToDisplay);
      } else if (lastSol - entryNumber === 3) {
        $('#four-day').show();
        $('#four-days').text(htmlToDisplay);
      } else if (lastSol - entryNumber === 4) {
        $('#five-day').show();
        $('#five-days').text(htmlToDisplay);
      } else if (lastSol - entryNumber === 5) {
        $('#six-day').show();
        $('#six-days').text(htmlToDisplay);
      } else if (lastSol - entryNumber === 6) {
        $('#seven-day').show();
        $('#seven-days').text(htmlToDisplay);
      }
      console.log(`looped`);
    });
  } else {
    $('#showErrors').text(`Something is amiss on Mars. NASA hasn't been able to gather any weather data for the past seven days.`);
  }
}