const express = require("express")
const {handleUserSignUp} = require("../controllers/userControllers")
const router = express.Router()

router.post("/", handleUserSignUp)


module.exports = router