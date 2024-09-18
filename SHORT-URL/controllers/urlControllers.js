const shortid = require("shortid");
const URLModel = require("../models/url");

async function generateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortID = shortid();
  await URLModel.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    id: shortID
  })
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URLModel.findOne({ shortId: shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { generateShortURL, getAnalytics };
