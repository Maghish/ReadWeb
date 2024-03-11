import express from "express";

const router = express.Router();

// Controllers
import {
  createNewUser,
  authenticateUser,
  editUserData,
  getCurrentUser,
} from "../controllers/userManage";

router.post("/getcurrentuser", getCurrentUser);
router.get("/createuser", createNewUser);
router.get("/authenticateuser", authenticateUser);
router.get("/edituserdata", editUserData);

export default router;
