const config = {
  WWW_PORT: (process.env.PORT || 3000),
  WEATHER_API_BASE_URL: (process.env.WEATHER_API_BASE_URL || 'api.worldweatheronline.com'),
  WWO_API_KEY: '90588681a57e483e89f45452192506',
};

module.exports = config;
