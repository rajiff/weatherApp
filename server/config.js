const config = require('./appconfig');

// Environment agnostic config can be added below
config.HTTP_ERROR = {
  STATUS_400: {
    msg: 'Invalid request data or exception, please try later..!',
  },
  STATUS_500: {
    msg: 'Something went wrong, please try later',
  },
};

module.exports = config;
