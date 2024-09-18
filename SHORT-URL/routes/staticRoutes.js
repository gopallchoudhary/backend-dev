const express = require("express")
const URL = require("../models/url")
const router = express.Router()

router.get("/", async (req, res) => {
    const allURLS =  await URL.find({})
    let lt = allURLS.length
    return res.render("home", {
        urls: allURLS,
        linksNumber: lt
    })
})


module.exports = router