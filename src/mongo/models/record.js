const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const recordSchema = new Schema(
  {
    apiKey: { type: String, required: true },
    unit: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: Number, required: true },
    // TIME?
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('Record', recordSchema);

module.exports = model;
