const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      require: true,
      unique: true,
    },

    redirectURL: {
      type: String,
      require: true,
    },

    visitHistory: [{ timestamp: { type: Number }, day: {type: String} }]
  },
  { timestamps: true }
);

const UrlModel = mongoose.model("Url", urlSchema);

module.exports = UrlModel
