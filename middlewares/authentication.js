const { user } = require("pg/lib/defaults");
const { verifyToken } = require("../helpers/jwt");
const { Users } = require("../models");

const authentication = (req, res, next) => {
  try {
    const token = req.get("token");
    const userDecoded = verifyToken(token);
    console.log(userDecoded);
    Users.findOne({
      where: {
        id: userDecoded.id,
        email: userDecoded.email,
      },
    })
      .then((users) => {
        if (!users) {
          return res.status(401).json({
            name: "Authentication Error",
            devMessage: `User with id ${userDecoded.id} not found`,
          });
        }
        res.locals.users = users;
        return next();
      })
      .catch((err) => {
        return res.status(401).json(err);
      });
  } catch (err) {
    return res.status(401).json(err);
  }
};

module.exports = authentication;
