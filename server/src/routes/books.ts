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
} from "../controllers/booksManage";

const router = Router();

router.post("/getallbooks", getAllBooks);
router.post("/getbook", getBook);
router.post("/createbook", createBook);
router.post("/editbook", editBook);
router.post("/deletebook", deleteBook);
router.post("/writereviewonbook", writeReviewOnBook);
router.post("/addtagstobook", addTagsToBook);
router.post("/edittagsinbook", editTagsInBook);

export default router;
