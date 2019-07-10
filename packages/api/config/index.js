import convict from 'convict';
import testConfig from './test';
import devConfig from './development';

const config = convict({
  db: {
    reactions: {
      name: {
        doc: 'The DynamoDB reactions table name',
        format: String,
        default: null,
        env: 'REACTIONS_TABLE',
      },
    },
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  isOffline: {
    doc: 'A flag determining whether or not we are using serverless offline',
    format: Boolean,
    default: false,
    env: 'IS_OFFLINE',
  },
});

const env = config.get('env');

switch (env) {
  case 'development':
    config.load(devConfig);
    break;
  case 'test':
    config.load(testConfig);
    break;
  case 'production':
  default:
    break;
}

export default config;
