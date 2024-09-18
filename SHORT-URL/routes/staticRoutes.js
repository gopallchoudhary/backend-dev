const express = require("express")
const URL = require("../models/url")
const userModel = require("../models/user")
const router = express.Router()

router.get("/", async (req, res) => {
    const allURLS =  await URL.find({})
    let lt = allURLS.length
    return res.render("home", {
        urls: allURLS,
        linksNumber: lt
    })
})


router.get("/signup", (req, res) =>{
    return res.render("signup")
})



module.exports = router