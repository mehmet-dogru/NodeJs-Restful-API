const express = require("express");
require("./db/dbConnection");

//ROUTES
const userRouter = require("./router/userRouter");

const app = express();

app.use(express.json()); //İsteklerin parse edilmesi için gerekli olan middleware
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    mesaj: "Welcome",
  });
});

app.post("/", (req, res) => {
  res.status(200).json(req.body);
});

app.listen(3000, () => {
  console.log("===> SERVER RUN ON PORT 3000 <===");
});
