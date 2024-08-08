import { Sequelize } from 'sequelize';
import { config } from '../../config/config';
import { setupModels } from '../db/models';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false
});

setupModels(sequelize);

sequelize.sync();
