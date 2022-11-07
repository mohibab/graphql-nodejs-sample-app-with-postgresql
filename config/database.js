const { Client } = require('pg');

const postgresql = new Client({
    host: "localhost",
    user: "postgres",
    password: "db",
    database: "node-grpahql"
})

module.exports = {postgresql};