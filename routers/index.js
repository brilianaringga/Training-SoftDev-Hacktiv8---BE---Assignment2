const router = require("express").Router();

const { register, login } = require("../controllers/auth.controllers");
const { getAllMovies } = require("../controllers/movies.controller");
const authentication = require("../middlewares/authentication");

router.post("/register", register);
router.post("/login", login);

router.use(authentication);
router.get("/movies", getAllMovies);

module.exports = router;
