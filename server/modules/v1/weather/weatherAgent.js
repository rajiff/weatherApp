const http = require('http');
const config = require('../../../config');
const logger = require('../../../applogger');

function getWeather(city, date) {
  return new Promise((resolve, reject) => {
    // Create the path for the HTTP request to get the weather
    const path = `${'/premium/v1/weather.ashx?format=json&num_of_days=1'
      + '&q='}${encodeURIComponent((city || 'Bangalore'))}&key=${config.WWO_API_KEY}&date=${date || Date.now()}`;
    logger.debug(`About make weather API Request: ${path}`);

    // Make the HTTP request to get the weather
    http.get({ host: config.WEATHER_API_BASE_URL, path }, (res) => {
      let body = ''; // var to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
        // After all the data has been received parse the JSON for desired data
        const response = JSON.parse(body);
        const forecast = response.data.weather[0];
        const location = response.data.request[0];
        const conditions = response.data.current_condition[0];
        const currentConditions = conditions.weatherDesc[0].value;

        // Create response
        const message = `Current conditions in the ${location.type} 
        ${location.query} are ${currentConditions} with a projected high of
        ${forecast.maxtempC}°C or ${forecast.maxtempF}°F and a low of 
        ${forecast.mintempC}°C or ${forecast.mintempF}°F on 
        ${forecast.date}.`;

        const output = {
          query: { city, date },
          result: {
            /* location,
            forecast,
            conditions,
            currentConditions, */
            response_message: '',
          },
        };

        // Resolve the promise with the output text
        logger.debug(`Weather result ${output}`);
        resolve(output);
      });

      res.on('error', (error) => {
        logger.error(`Error calling the weather API: ${error}`);
        reject('Something went wrong in checking the weather..!');
      });
    });
  });
}

module.exports = {
  getWeather,
};
