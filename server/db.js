const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pipoca",
    host: "localhost",
    port: 5432,
    database: "resource_register"
});

module.exports = pool;