import { Sequelize } from 'sequelize';
import { config } from '../../config/config';
import { setupModels } from '../db/models';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: false
});

setupModels(sequelize);

sequelize.sync();
