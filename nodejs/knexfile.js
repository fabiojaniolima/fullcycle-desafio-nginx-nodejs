require('dotenv/config');
const { resolve } = require('path');

const basePath = resolve(__dirname, 'src', 'database');
console.log(basePath)
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
    client: 'mysql',
    connection: {
        host: DB_HOST || 'localhost',
        user: DB_USER || 'root',
        password: DB_PASSWORD || '',
        database: DB_NAME || 'myapp_test',
    },
    migrations: {
        directory: resolve(basePath, 'migrations'),
    },
    seeds: {
        directory: resolve(basePath, 'seeds'),
    },
}
