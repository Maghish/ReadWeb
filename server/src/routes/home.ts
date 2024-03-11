import express from "express";

const router = express.Router();

// Controllers
const {
  createNewUser,
  authenticateUser,
  editUserData,
} = require("../controllers/userManage");

router.get("/");

export default router;
