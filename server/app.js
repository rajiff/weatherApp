// const path = require('path');
const morgan = require('morgan');
const dateFormat = require('date-format');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const express = require('express');
const config = require('./config');
const modulesV1 = require('./modules/v1');

const app = express();

app.use(helmet());
morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date())); // Both morgan and log4js are configured to same date format, so that log reading is meaningful and not confusing due to different date formats
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/favicon.ico', (req, res) => res.status(204)); // No-content

app.use('/api/v1/', modulesV1);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).send(`Requested resource ${req.url} not found..!`);
});

module.exports = app;
