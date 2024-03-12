import { Router } from "express";
import { getAllBooks } from "../controllers/booksManage";

const router = Router();

router.post("/getallbooks", getAllBooks);

export default router;
