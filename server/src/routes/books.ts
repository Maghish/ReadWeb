import { Router } from "express";
import {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
  writeReviewOnBook,
} from "../controllers/booksManage";

const router = Router();

router.post("/getallbooks", getAllBooks);
router.post("/getbook", getBook);
router.post("/createbook", createBook);
router.post("/editbook", editBook);
router.post("/deletebook", deleteBook);
router.post("/writereviewonbook", writeReviewOnBook);

export default router;
