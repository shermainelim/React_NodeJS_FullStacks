const mysql = require("mysql");

const db = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bdfbfac26378bf",
  password: "9afccc10",
  database: "heroku_bbb83f01af87c3b",
});

module.exports = db;
