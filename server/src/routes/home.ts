import express from "express";

const router = express.Router();

// Controllers
import {
  createNewUser,
  authenticateUser,
  editUserData,
} from "../controllers/userManage";

router.get("/createuser", createNewUser);
router.get("/authenticateuser", authenticateUser);
router.get("/edituserdata", editUserData);

export default router;
