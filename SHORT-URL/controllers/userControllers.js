const userModel =  require("../models/user")
async function handleUserSignUp(req, res) {
    const {name, email, password} = req.body
    await userModel.create({
        name,
        email, 
        password
    })
    return res.render("home")
}

module.exports = {handleUserSignUp}