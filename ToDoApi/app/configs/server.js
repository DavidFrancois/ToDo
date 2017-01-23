'use strict'

const joi = require('joi')

const name = 'todo-api';
const production = 'production';
const development = 'development';
const test = 'test';

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow([development, production, test])
    .required(),
  PORT: joi.number()
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

var port = envVars.PORT == undefined ? 8080 : envVars.PORT;

console.log(envVars.NODE_ENV);

module.exports = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === test,
  isDevelopment: envVars.NODE_ENV === development,
  isProduction: envVars.NODE_ENV === production,
  port: envVars.PORT == undefined ? 8080 : envVars.PORT
}

/*
module.exports = {
  all: {
    name: 'todo-api'
  },
  development: {
    port: 8080
  },
  preprod: {
    port: 8282
  },
  production: {
    port: 8282
  }
}
*/
