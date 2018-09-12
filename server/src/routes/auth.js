// /auth

const express = require("express");
const User = require("../data/models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config.js");
const verifyToken = require("../auth/VerifyToken");

router.post("/register", async (req, res, next) => {
   const { email, password, fullName } = req.body;
   var user = await User.findOne({ email }).exec();

   if (user) {
      res.send(`User ${user.email} already exists.`);
   } else {
      try {
         const newUser = await User.create({
            email,
            password: bcrypt.hashSync(password, 8),
            fullName,
            isActive: true
         });

         const token = generateToken({ id: newUser._id });

         res.status(200).send({ auth: true, token });
      } catch (error) {
         console.error(error);
         res.status(500).send("There was a problem registering the user.");
      }
   }
});

router.get("/me", verifyToken, async (req, res, next) => {
   const token = req.headers["x-access-token"];

   if (!token) {
      return res.status(401).send({ auth: false, message: "No token provided." });
   }

   try {
      // {password: 0} allows us to avoid sending passwords (hashed or otherwise)
      const user = await User.findById(req.userId, { password: 0 });
      if (!user) {
         return res.status(404).send("No user found.");
      }
      return res.status(200).send(user);
   } catch (error) {
      return res.status(500).send("There was a problem finding the user.");
   }
});

router.post("/login", async (req, res) => {
   const { email, password } = req.body;
   console.log(req.body);

   try {
      const user = await User.findOne({ email });

      if (!user) {
         return res.status(404).send("No user found.");
      }

      if (!bcrypt.compareSync(password, user.password)) {
         return res.status(401).send({ auth: false, token: null });
      }

      const token = generateToken({ id: user._id });

      res.status(200).send({ auth: true, token });
   } catch (error) {
      return res.status(500).send("There was a problem logging in.");
   }
});

router.get("/logout", (req, res) => {
   res.status(200).send({ auth: false, token: null });
});

generateToken = (payload, expiresIn = 86400) => {
   return jwt.sign(payload, config.secret, { expiresIn });
};

module.exports = router;
