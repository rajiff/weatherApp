const config = {
  WWW_PORT: (process.env.PORT || 3000),
  WEATHER_API_BASE_URL: (process.env.WEATHER_API_BASE_URL || 'api.worldweatheronline.com'),
  WWO_API_KEY: '515d97a11970440789b50458180510',
}

module.exports = config;
