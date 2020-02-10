const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const recordSchema = new Schema(
  {
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    gps: {
      lat: { type: Number, required: true },
      long: { type: Number, required: true }
    },
    apiKey: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('Record', recordSchema);

module.exports = model;
