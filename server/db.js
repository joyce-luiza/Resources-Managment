const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "insira a sua senha aqui",
    host: "localhost",
    port: 5432, // verifique se esta é a porta configurada pelo postgres
    database: "resource_register"
});

module.exports = pool;

