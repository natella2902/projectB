const db = require("../models");
const chalk = require("chalk");

module.exports = function () {
  db.mongoose.connect(db.url);
  const connection = db.mongoose.connection;
  connection.on("error", function (error) {
    console.log("connection error:", error);
  });
  connection.once("open", function () {
    console.log(`MongoDB status: Connected ${chalk.green("✓")}`);
  });
};
