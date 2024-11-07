const dotenv = require("dotenv");

module.exports = {
  test: {
    username: "root",
    password: "@Limon199031",
    database: "HelpBeacon",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  development: {
    username: process.env.Db_user,
    password: process.env.Db_pass,
    database: process.env.Db_dbname,
    host: process.env.Db_host,
    port: process.env.Db_port,
    dialect: "mysql",
  },
  production: {
    username: process.env.Db_user,
    password: process.env.Db_pass,
    database: process.env.Db_dbname,
    host: process.env.Db_host,
    port: process.env.Db_port,
    dialect: "mysql",
  },
};
