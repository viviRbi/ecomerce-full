const express = require("express");
const router = express.Router();
const mern = require("../controllers/mern.js");


router.get('/mern', mern.index);



module.exports = router
 