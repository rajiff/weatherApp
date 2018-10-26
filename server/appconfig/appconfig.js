/* eslint no-underscore-dangle: 0 */
const path = require('path');
const extend = require('util')._extend;
const developmentConfig = require('./env/development');
const testConfig = require('./env/test');
const productionConfig = require('./env/production');

const defaults = {
  SERVER_ROOT: path.resolve(__dirname, '../'),
  NODE_ENV: process.env.NODE_ENV,
};

const appConfig = {
  development: extend(developmentConfig, defaults),
  test: extend(testConfig, defaults),
  production: extend(productionConfig, defaults),
};

const effectiveENV = (process.env.NODE_ENV || 'development');

process.stdout.write(`\nConfiguring for environment: ${effectiveENV}`);

const effectiveConfig = appConfig[effectiveENV];
process.stdout.write(`\nconfig settings: ${JSON.stringify(effectiveConfig)}\n`);

module.exports = effectiveConfig;
