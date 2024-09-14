import express, { json } from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };
import fs from "fs";
const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

//!<==Routes==>

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;

  res.send(html);
});

//List all users
app.get("/api/users", (req, res) => {
  res.send(users);
});

//?<==Routing==>
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);
    res.send(user);
  })

  .patch((req, res) => {
    //edit the user with id
    const id = Number(req.params.id);
    const body = req.body;
  })

  .delete((req, res) => {
    //delete user with id
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find((user) => user.id == id);
    console.log(user);
  });

app.post("/api/users", (req, res) => {
  //create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.listen(port, () => {
  console.log(`This app is running on port: ${port}`);
});
