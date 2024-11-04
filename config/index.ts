import productionConfig from './production';
import developmentConfig from './development';
import defaultConfig from './default';

export type ConfigType = {
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
  server: {
    port: number;
    host: string;
  };
  api: {
    baseUrl: string;
  };
};

let config: ConfigType;

switch (process.env.NODE_ENV) {
  case 'production':
    config = productionConfig;
    break;
  case 'development':
    config = developmentConfig;
    break;
  default:
    config = defaultConfig;
    break;
}

export default config;
