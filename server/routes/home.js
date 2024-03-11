const express = require("express");
const router = express.Router();

// Controllers
const {
  createNewUser,
  authenticateUser,
  editUserData,
} = require("../controllers/userManage");

router.get("/");

module.exports = router;
