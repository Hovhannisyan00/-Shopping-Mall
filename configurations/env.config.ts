export const SERVER_CONFIG = Object.freeze({
  APP_PORT: process.env.APP_PORT || 8080,
  SALT: process.env.SALT || 8,
  JWT_SECRET: process.env.JWT_SECRET || 'your_secret_key',
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
});
