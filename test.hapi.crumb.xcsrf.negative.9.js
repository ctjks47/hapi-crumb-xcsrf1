'use strict';

const Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');
const server = new Hapi.Server();
const port = 3000;
server.connection({
  port: port
});

server.register([
  {
    register: require('crumb'),
    options: {
      size: 10
    }
  },{
    register: Inert,
    options: {}
  },{
    register: Scooter,
    options: {}
  },{
    register: Blankie,
    options: {scriptSrc: 'self'}
  }
], function (err) {
  if (err) {
    throw err;
  }
});


server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello World');
  }
});


server.start(function () {
  console.log('Now Visit: http://localhost:' + port);
});
