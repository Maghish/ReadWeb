import { Router } from "express";
import { getAllBooks, getBook } from "../controllers/booksManage";

const router = Router();

router.post("/getallbooks", getAllBooks);
router.post("/getbook", getBook);

export default router;
