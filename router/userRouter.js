const router = require("express").Router();
//const router = express.Router();
const User = require("../models/userModel");

router.get("/", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

router.get("/:id", (req, res) => {
  res.json({
    mesaj: "user with id is " + req.params.id + " listed",
  });
});

router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.json(result);
  } catch (error) {
    console.log("Error while registering user" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({
        message: "User with id is " + req.params.id + " not found",
      });
    }
  } catch (error) {
    console.log("güncellenemedi");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete({ _id: req.params.id });

    if (result) {
      return res.json({
        message: "User with id is " + req.params.id + " has been deleted :)",
      });
    } else {
      res.status(404).json({
        message: "User with id is " + req.params.id + " not found :(",
      });
    }
  } catch (error) {
    console.log("Error while deleting user" + error);
    res.status(404).json({
      message:
        "User with id is " + req.params.id + " could not been deleted :(",
    });
  }
});

module.exports = router;
