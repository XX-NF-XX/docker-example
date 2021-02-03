require('dotenv').config();

const { env } = process;
const allowedEnvironments = ['development', 'staging', 'production'];

if (!env.NODE_ENV || !allowedEnvironments.includes(env.NODE_ENV)) {
  throw new Error(`Invalid NODE_ENV variable! \nAvailable options: ${allowedEnvironments.join(', ')}`);
}

const config = Object.freeze({
  nodeEnv: env.NODE_ENV ?? 'development',
  port: env.PORT ?? '8080',
  host: env.HOST ?? '::',
  defaultAnswer: env.DEFAULT_ANSWER,
});

module.exports = config;
