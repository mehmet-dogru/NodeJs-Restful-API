const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/restful_api")
  .then(() => {
    console.log("===> CONNECTED TO DATABASE <===");
  })
  .catch((err) => {
    console.log("===> ERROR! FAILED TO CONNECT TO DATABASE! <===");
  });
