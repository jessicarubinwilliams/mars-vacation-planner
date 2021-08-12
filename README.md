## _This project is not yet styled and thus is not in a portfolio ready state. The styling should not be considered representational of professional work._

# _Mars Vacation Planner_

#### _A web-based application to get the current weather on Mars as well as the most recent images sent back by the three Mars rovers._

#### _By **Jessica R. Williams, Smita Raj and Alex Bertotto**_

#### _Table of Contents_

1. [Preview](#preview)
2. [Technologies Used](#technologies)
3. [Description](#description)
4. [Setup/Installation Requirements](#setup)
5. [Additional Setup/Installation Note for Windows Users](#windows)
6. [Note about NASA's InSight: Mars Weather Service API](#weather-api)
7. [Specifications](#specs)
8. [Known Bugs](#bugs)
9. [License](#license)
10. [Contact Information](#contact)

## Preview <a id="preview"></a>

* _Direct your browser to a [live version](https://jessicarubinwilliams.github.io/mars-vacation-planner) on GitHub Pages._

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _dotenv-webpack@2.0.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _gh-pages 3.2.3_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description <a id="description"></a>

_This web-based application playfully imagines a time when humans may travel to Mars with a short journey. It provides recent weather and images of Mars to help the user know what to pack for their trip. Weather data comes from NASA's InSight: Mars Weather Service API and images come from NASA's Mars Rover Photos API. Information about both APIs may be found on [NASA's API website](https://api.nasa.gov/)_

## Setup/Installation Requirements <a id="setup"></a>

* _Note about API key: This application uses two of NASA's Application Programming Interfaces or APIs. The rate limits for the DEMO_KEY are 30 requests per IP address per hour and 50 requests per IP address per day. If this is sufficient for your needs there is no need to get a unique key. If it is not, visit [NASA's API webpage](https://api.nasa.gov/) to get a unique key with an hourly limit of 1,000 requests per hour._

* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Nope Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/project>`_
* _Navigate to the top level of the repository with the command `$ cd project`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create file for storing environmental variables you want to keep secret (such as an API key)`$ touch .env`_
* _Add either your unique API key or the Demo Key to the .env file with the following code `API_KEY=insert_your_unique_API-key_here` or `API_KEY=DEMO_KEY`_
* _Create production environment with terminal command `$ npm run build`_
* _Open project in a development server in the browser of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_

## Additional Setup/Installation Note for Windows Users <a id="windows"></a>

_This environment was created on a Mac. For it to work properly in your local environment make the following change:_
* _Update package.json, line 8 to: `"start": "npm run build & webpack-dev-server --open --mode development",`_

## Note about NASA's InSight: Mars Weather Service API <a id="weather-api"><a>
* _As of 8/11/2021 when this program was built, NASA's Mars Weather Service API from the InSight Mars lander had not returned new weather data since the fall of 2020. See information [here](https://mars.nasa.gov/insight/weather/). The API still returns a 200ok successful response, it just doesn't contain any weather data. Our code accounts for this and if the API doesn't return the desired data, the application lets the user know there is no recent weather data from Mars. This is in addition to error handling for unsuccessful API calls. To test our code in the hopes that InSight will return weather data again in the future, we created a sample complete response based on the sample response in the [API documentation](https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf). If you would like to test the code with this sample response, with your development server running `npm run start` open index.js in your code editor. Comment out lines 5 &n 10-13. Uncomment lines 7 & 14._

## Known Bugs <a id="bugs"></a>
* _No known bugs_

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) **_2021 Jessica R. Williams, Smita Raj and Alex Bertotto_**

## Contact Information <a id="contact"></a>
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**