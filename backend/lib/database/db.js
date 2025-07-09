import { Sequelize } from "sequelize";

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

const connectionDB = new Sequelize({
    dialect: 'postgres',
    database: DB_NAME,
    username: DB_USER,
    password: 'gbmax1234',
    host: 'localhost',
    port: DB_PORT,
    ssl: true
});

export default connectionDB;
