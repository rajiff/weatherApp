const config = {
  WWW_PORT: (process.env.PORT || 3000),
  WEATHER_API_BASE_URL: (process.env.WEATHER_API_BASE_URL || 'https://api.worldweatheronline.com'),
}

module.exports = config;
