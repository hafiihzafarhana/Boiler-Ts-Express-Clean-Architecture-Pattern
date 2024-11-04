import { ConfigType } from '@config/index';

const _default_1: ConfigType = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'devUser',
    password: process.env.DB_PASSWORD || 'devPassword',
    database: process.env.DB_NAME || 'devDB'
  },
  server: {
    port: parseInt(process.env.SERVER_PORT || '3000'),
    host: process.env.SERVER_HOST || 'localhost'
  },
  api: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api'
  }
};
export default _default_1;
