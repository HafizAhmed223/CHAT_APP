const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect DB
require("./db/collection");

// Import files
const Users = require("./model/users");
const Messages = require("./model/message");
const Conversations = require("./model/conversation");

// App use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use body-parser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 8000;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.post("/api/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).send("Please enter all required fields");
    }
    const isAlreadyExist = await Users.findOne({ email });
    if (isAlreadyExist) {
      return res.status(400).send("User already exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Users({ fullName, email, password: hashedPassword });
      await newUser.save();
      return res.status(200).send("User registered successfully");
    }
  } catch (error) {
    console.log("Error ==>", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please enter all required fields");
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send("User email or password is incorrect");
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("User email or password is incorrect");
      }
      const payload = {
        userId: user._id,
        email: user.email,
      };
      const JWT_SECRET_KEY =
        process.env.JWT_SECRET_KEY || "THIS_IS_A_JWT_SECRET_KEY";
      const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 });
      await Users.updateOne({ _id: user._id }, { $set: { token: token } });
      return res.status(200).json({
        user: { email: user.email, fullName: user.fullName },
        token: token,
      });
    }
  } catch (error) {
    console.log("Error ==>", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
