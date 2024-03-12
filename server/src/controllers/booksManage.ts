import { Request, Response } from "express";
import { authenticateUser } from "./userManage";
import bookModel from "../models/bookModel";

async function getAllBooks(req: Request, res: Response) {
  try {
    const { token, filter, extraData } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      if (filter === "None") {
        const allBooks = await bookModel.find({});
        res.status(200).json({
          message: "Successfully fetched all books",
          allBooks: allBooks,
        });
      }
      if (filter === "User") {
        const allBooks = await bookModel.find({ author: extraData });
        res.status(200).json({
          message: "Successfully fetched all books",
          allBooks: allBooks,
        });
      }
      if (filter === "Tag") {
        const allBooks = await bookModel.find({});
        let allBooksWithSameTags: string[] = [];
        allBooks.forEach((book) => {
          if (extraData.length > 0) {
            extraData.forEach((tag: string) => {
              if (tag in book.tags) {
                allBooksWithSameTags.push(tag);
              }
            });
          }
        });

        res.status(200).json({
          message: "Successfully fetched all books",
          allTags: allBooksWithSameTags,
        });
      }
    }
  } catch (error: any) {
    if (error.response) {
      res.status(400).json({ message: error.response });
    } else {
      res
        .status(400)
        .json({ message: "Unexpected error occurred, please try again" });
    }
  }
}

async function getBook(req: Request, res: Response) {
  try {
    const { token, bookID } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      const book = await bookModel.findById(bookID);
      res
        .status(200)
        .json({ message: "Successfully fetched the book", bookData: book });
    }
  } catch (error: any) {
    if (error.response) {
      res.status(400).json({ message: error.response });
    } else {
      res
        .status(400)
        .json({ message: "Unexpected error occurred, please try again" });
    }
  }
}

async function createBook(req: Request, res: Response) {}
async function editBook(req: Request, res: Response) {}
async function deleteBook(req: Request, res: Response) {}
async function rateBook(req: Request, res: Response) {}
async function writeReviewOnBook(req: Request, res: Response) {}
async function addTagsToBook(req: Request, res: Response) {}
async function editTagsInBook(req: Request, res: Response) {}

export { getAllBooks };
