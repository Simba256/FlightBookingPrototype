const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    password: "pgadmin",
    host: "localhost",
    port: 5432,
    database: "project_db"

});

module.exports = pool;