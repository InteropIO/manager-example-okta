import { start, Config } from '@interopio/manager';

const config: Config = {
  name: 'local',
  base: 'api',
  port: 4356,
  store: {
    type: 'mongo',

    // TODO: Replace this with your own MongoDB connection string.
    connection:
      'mongodb://mongo_user:mongo_password@localhost:4901/io_manager?authSource=admin',
  },
  token: {
    // TODO: Replace this with your secret.
    secret: '85611bfe-6439-4cb1-9146-fee9fe8a2943',
  },
  auth_method: 'okta',
  auth_okta: {
    // TODO: Specify the appropriate okta verifier options here.
    verifierOptions: {
      issuer: 'https://trial-8928888.okta.com/oauth2/default',
    },
    // TODO: Specify the appropriate audiences here.
    audiences: ['api://default'],
  },
};

await start(config);
