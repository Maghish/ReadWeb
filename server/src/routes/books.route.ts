import { Router } from "express";
import {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
  writeReviewOnBook,
  addTagsToBook,
  editTagsInBook,
} from "../controllers/books.controller";
import protect from "../middleware/auth.middleware";

const router = Router();

router.post("/getallbooks", protect, getAllBooks);
router.post("/getbook", protect, getBook);
router.post("/createbook", protect, createBook);
router.post("/editbook", protect, editBook);
router.post("/deletebook", protect, deleteBook);
router.post("/writereviewonbook", protect, writeReviewOnBook);
router.post("/addtagstobook", protect, addTagsToBook);
router.post("/edittagsinbook", protect, editTagsInBook);

export default router;
