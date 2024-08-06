import dotenv from 'dotenv';
dotenv.config();

export const config = {
 env: process.env.NODE_ENV || 'dev',
 port: process.env.PORT || 3000,
 dbUser: String(process.env.DB_USER),
 dbPassword: String(process.env.DB_PASSWORD),
 dbHost: process.env.DB_HOST,
 dbName: process.env.DB_NAME,
 dbPort: process.env.DB_PORT
};