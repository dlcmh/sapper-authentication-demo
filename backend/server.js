'use strict';

const { strategy } = require('./auth');
const auth_jwt_plugin = require('hapi-auth-jwt2');
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    routes: {
      cors: {
        credentials: true,
      },
    },
    port: 2000,
    host: 'localhost',
  });

  await server.register(auth_jwt_plugin);
  const { type, name, config } = strategy;
  server.auth.strategy(type, name, config);

  await server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
