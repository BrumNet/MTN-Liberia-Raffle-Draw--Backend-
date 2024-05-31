const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prizeConfigSchema = new Schema({
  msisdn: {
    type: String,
    required: true,
    unique: true,
  },
  prize: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PrizeConfig", prizeConfigSchema);
