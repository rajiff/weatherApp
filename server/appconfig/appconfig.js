const path = require('path');
const extend = require('util')._extend;

const defaults = {
  SERVER_ROOT: path.resolve(__dirname, '../'),
  NODE_ENV: process.env.NODE_ENV,
};

const appConfig = {
  development: extend(require('./env/development.js'), defaults),
  test: extend(require('./env/test.js'), defaults),
  production: extend(require('./env/production.js'), defaults),
};

const effectiveENV = (process.env.NODE_ENV || 'development');

process.stdout.write(`\nConfiguring for environment: ${effectiveENV}`);

const effectiveConfig = appConfig[effectiveENV];
process.stdout.write(`\nconfig settings: ${JSON.stringify(effectiveConfig)}\n`);

module.exports = effectiveConfig;
