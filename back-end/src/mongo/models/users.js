const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  apiKey: { type: String, required: false, unique: true },
  email: { type: String, required: true, unique: true }
});

const model = mongoose.model('User', userSchema);

module.exports = model;
