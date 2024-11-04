import { ConfigType } from '@config/index';

const _default_1: ConfigType = {
  db: {
    host: process.env.DB_HOST || 'prod-db-server',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'prodUser',
    password: process.env.DB_PASSWORD || 'prodPassword',
    database: process.env.DB_NAME || 'prodDB'
  },
  server: {
    port: parseInt(process.env.SERVER_PORT || '3000'),
    host: process.env.SERVER_HOST || '0.0.0.0'
  },
  api: {
    baseUrl: process.env.API_BASE_URL || 'https://api.production.com'
  }
};
export default _default_1;
