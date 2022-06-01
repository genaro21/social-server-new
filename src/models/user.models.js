const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      reuired: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
