import { Router } from "express";
import { getAllTags, getTag } from "../controllers/tags.controller";
import protect from "../middleware/auth.middleware";

const router = Router();

router.get("/getalltags", protect, getAllTags);
router.post("/gettag", protect, getTag);

export default router;
