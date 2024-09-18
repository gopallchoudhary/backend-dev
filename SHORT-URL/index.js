const express = require("express");
const path = require("path");
const urlRoutes = require("./routes/urlRoutes");
const staticRoutes = require("./routes/staticRoutes");
const { connectToMongoDB } = require("./connect");
const URLModel = require("./models/url");
const port = 3000;
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Connected to MongoDB")
);

app.use("/url", urlRoutes);
app.use("/", staticRoutes);

app.get("/url/:shortid", async (req, res) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNo = new Date().getDay();
  const shortID = req.params.shortid;
  const entry = await URLModel.findOneAndUpdate(
    { shortId: shortID },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
          day: days[dayNo],
        },
      },
    },
    { new: true }
  );
  res.redirect(entry.redirectURL);
});

//!<==SERVER-SIDE-RENDERING==>
// app.get("/test",  async (req, res) => {
//   const allURLS = await URLModel.find({})
//   res.render('home', {
//     url: allURLS,
//   })
// })

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
