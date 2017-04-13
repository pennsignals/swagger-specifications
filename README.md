[![Travis](https://img.shields.io/travis/pennsignals/swagger-specifications.svg?style=flat-square)](https://travis-ci.org/pennsignals/swagger-specifications) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

## Introduction

This repository contains a collection of Swagger specifications utilized by Penn Signals.

## Testing

**Prerequisites**

  - [nodejs](https://nodejs.org/en/download/)
  - [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

```
$ gulp test
./specifications/twilio/swagger.json
{ swagger: '2.0',
  info:
   { title: 'Twilio API',
     description: 'Twilio REST API',
     version: '1.0.0' },
  host: 'api.twilio.com',
  schemes: [ 'https' ],
  basePath: '/2010-04-01',
  produces: [ 'application/json' ],
  consumes: [ 'application/x-www-form-urlencoded' ],
  securityDefinitions: { basicAuth: { type: 'basic' } },
  paths: { '/Accounts/{AccountSid}/Messages.json': { post: [Object] } },
  definitions: { Error: { type: 'object', properties: [Object] } } }
```
