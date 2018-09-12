const jwt = require("jsonwebtoken");
const config = require("../config/config");

// middleware to verify, decode, and add the requester's ID to the request
const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, config.secret, async (err, decoded) => {
    if (err) {
      console.error(err);

      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }

    req.userId = decoded.id; // add the valid & decoded id to the requestt
    next();
  });
};

module.exports = verifyToken;