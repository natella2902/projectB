module.exports = function (mongoose) {
  const schema = mongoose.Schema(
    {
        email: {
            type: String
        },
        password: {
            type: String
        },
        name: {
            type: String
        },
        userName: {
            type: String
        }
    },
    { timestamps: false }
  );
  const User = mongoose.model("User", schema);
  return User;
};

