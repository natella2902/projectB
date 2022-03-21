const mongoose = require("mongoose");
const config = require("config");

const db = {};
db.mongoose = mongoose;
config.get("MONGO_USER");
db.url = `mongodb://${
  config.get("MONGO_USER")
    ? `${config.get("MONGO_USER")}:${config.get("MONGO_PASSWORD")}@`
    : ""
}${config.get("MONGO_IP")}:${config.get("MONGO_PORT")}/${config.get(
  "MONGO_DATABASE"
)}${config.get("MONGO_USER") ? "?authSource=admin" : ""}`;
db.user = require("./user.model")(mongoose);
db.project = require("./project.model")(mongoose);
db.log = require("./log.model")(mongoose);

module.exports = db;
