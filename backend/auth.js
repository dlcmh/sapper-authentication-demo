'use strict';

const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const sign = promisify(jwt.sign);
const seed = 'some-totally-secret-string';

exports.strategy = {
  type: 'jwt',
  name: 'jwt',
  config: {
    cookieKey: 'my-jwt',
    validate: ({ id, role, scp }) => ({
      isValid: true,
      credentials: {
        id,
        role,
        scope: scp,
      },
    }),
    verifyOptions: {
      algorithms: ['HS256'],
    },
  },
};

exports.createJsonWebToken = async function (user) {
  const { email, scope, name } = user;
  const exp = new Date();
  exp.setDate(exp.getDate() + 1);
  return sign({ email, scope, name, exp: exp.getTime() }, seed);
};

exports.cookieConfig = {
  encoding: 'none',
  isHttpOnly: true,
  ttl: 1000 * 60 * 60 * 24 * 3,
  isSecure: false,
  isSameSite: false,
  domain: 'localhost',
  path: '/',
};
