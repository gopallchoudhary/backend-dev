import express, { json } from "express";
import mongoose from "mongoose";
import userRouter from  "./routes/user"
const port = 3000;
const app = express();

//.Middlewares
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   req.myUserName = "Gopal.dev";
//   fs.appendFile(
//     "log.txt",
//     `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`,
//     (err, data) => {
//       next();
//     }
//   );
// });

app.use("/routes", userRouter)


app.listen(port, () => {
  console.log(`This app is running on port: ${port}`)
});
