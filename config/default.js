module.exports = {
  MONGO_IP:
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_IP || "mongo"
      : "localhost",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_USER || null,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || null,
  MONGO_DATABASE: process.env.MONGO_DATABASE || "express",
  accessSecret: "evThhIqRzpJxmLcnb9efrqEcOpQ2Qnek",
};
