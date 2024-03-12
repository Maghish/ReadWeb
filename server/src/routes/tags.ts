import { Router } from "express";
import { getAllTags, getTag } from "../controllers/tagsManage";

const router = Router();

router.post("/getalltags", getAllTags);
router.post("/gettag", getTag);

export default router;
