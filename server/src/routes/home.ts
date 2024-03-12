import express from "express";

const router = express.Router();

// Controllers
import {
  createNewUser,
  loginUser,
  editUserData,
  getCurrentUser,
  getUser,
} from "../controllers/userManage";

router.post("/getcurrentuser", getCurrentUser);
router.post("/createuser", createNewUser);
router.post("/loginuser", loginUser);
router.post("/edituserdata", editUserData);
router.post("/getuser", getUser);

export default router;
