var mysql = require("mysql");
var databaseConfig = require("../core-modules/mysql/index");

const query = async (sql) => {
  var connection = await mysql.createConnection(databaseConfig);
  var [results, _] = await connection.execute(sql);
  return results;
};

module.exports = {
  query,
};
