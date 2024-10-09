// const mongoose = require("mongoose");
// const url =
//   "mongodb+srv://hafizahmedwaseem:admin1234@cluster0.m0ebksy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to DB"))
//   .catch((e) => console.log("Error", e));
const mongoose = require("mongoose");

const url =
  "mongodb+srv://hafizahmedwaseem:admin1234@cluster0.m0ebksy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
