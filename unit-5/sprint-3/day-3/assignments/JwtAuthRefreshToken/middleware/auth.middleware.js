
const jwt = require("jsonwebtoken");
// const { blacklist } = require("./blacklist");
const cookieParser = require("cookie-parser");

const auth = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json({ msg: "You have been logged out again" });
  }
  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      next();
    } else {
      res.json({ error: err });
    }
  });
};


module.exports = {
  auth,
};
