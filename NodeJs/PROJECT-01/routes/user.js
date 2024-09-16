import express from "express";
const router = express.Router()


app.router("/api/users", async (req, res) => {
    const allDbUsers = await user.find({});
    res.send(allDbUsers);
  });
  
  //*<==Routing==>
  app
    .route("/api/:id")
    .get(async (req, res) => {
      const addedUser = await user.findById(req.params.id);
      if (!addedUser) return res.status(404).json({ msg: "No User found" });
      res.send(addedUser);
    })
  
    .patch(async (req, res) => {
      const body = req.body;
      const editedUser = await user.findByIdAndUpdate(req.params.id, {
        lastName: body.last_name,
      });
  
      return res.json({ msg: "Updated" });
    })
  
    .delete(async (req, res) => {
      const deletedUser = await user.findByIdAndDelete(req.params.id);
      res.send(deletedUser);
    });
  
  //.Create User
  app.router("/api", async (req, res) => {
    //create new user
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.gender ||
      !body.email ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }
  
    const result = await user.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
    console.log("Result ", result);
    res.status(201).json({ msg: "User data Successfully created" });
  });