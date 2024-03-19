import { Request, Response } from "express";
import { authenticateUser } from "./user.controller";
import bookModel from "../models/book.model";

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

async function createBook(req: Request, res: Response) {
  try {
    const { token, bookName, description, tags, content } = req.body;
    /*
      bookName: string || "",
      description: string || "",
      tags: string[] || ["Anime", "Fantasy"]
      content: any[] || [
        {
          chapter: string || "Introduction",
          content: string || "Lorem Ipsum..........",
        },
        {
          chapter: string || "Background Story",
          content: string || "Lorem Ipsum..........",
        },
        {
          chapter: string || "Ending",
          content: string || "Lorem Ipsum.........."
        }
      ]
    */
    const user = await authenticateUser(token);
    if (user) {
      const newBook = new bookModel({
        author: user.username,
        name: bookName,
        description: description,
        tags: tags,
        content: content,
        ratings: 5.0,
        reviews: [],
      });
      const newBookSaved = await newBook.save();
      res.status(200).json({
        message: "Successfully created new book",
        bookData: newBookSaved,
      });
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

async function editBook(req: Request, res: Response) {
  try {
    const { token, bookID, mode, data } = req.body; // data is the data that will replace the already existing data
    const user = await authenticateUser(token);
    if (user) {
      const book = await bookModel.findById(bookID);
      if (mode === "name") {
        book!.name = data;
        const newSavedBook = await book!.save();
        res.status(200).json({
          message: "Successfully edited the book",
          bookData: newSavedBook,
        });
      }
      if (mode === "description") {
        book!.description = data;
        const newSavedBook = await book!.save();
        res.status(200).json({
          message: "Successfully edited the book",
          bookData: newSavedBook,
        });
      }
      if (mode === "content") {
        book!.content = data;
        const newSavedBook = await book!.save();
        res.status(200).json({
          message: "Successfully edited the book",
          bookData: newSavedBook,
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

async function deleteBook(req: Request, res: Response) {
  try {
    const { token, bookID } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      bookModel
        .findByIdAndDelete(bookID)
        .then(() =>
          res.status(400).json({ message: "Successfully deleted the book" })
        );
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

async function rateBook(req: Request, res: Response) {}

async function writeReviewOnBook(req: Request, res: Response) {
  try {
    const { token, bookID, reviewContent } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      const book = await bookModel.findById(bookID);
      if (book!.reviews.length <= 0) {
        book!.reviews = [{ author: user.username, content: reviewContent }];
      } else {
        book!.reviews = [
          ...book!.reviews,
          { author: user.username, content: reviewContent },
        ];
      }

      const newSavedBook = await book!.save();
      res.status(200).json({
        message: "Successfully wrote a review on the book",
        bookData: newSavedBook,
      });
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

async function addTagsToBook(req: Request, res: Response) {
  try {
    const { token, bookID, tags } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      const book = await bookModel.findById(bookID);
      if (book!.tags.length <= 0) {
        book!.tags = tags;
      } else {
        book!.tags = [...book!.tags, ...tags];
      }

      const newSavedBook = await book!.save();
      res.status(200).json({
        message: "Successfully added tags to the book",
        bookData: newSavedBook,
      });
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

async function editTagsInBook(req: Request, res: Response) {
  try {
    // The addition and subtraction of the tags will be implemented in the client itself
    // Hence the client will provide a final set of all tags
    const { token, bookID, tags } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      const book = await bookModel.findById(bookID);
      book!.tags = tags;
      const newSavedBook = await book!.save();
      res.status(200).json({
        message: "Successfully edited tags in the book",
        bookData: newSavedBook,
      });
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

export {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
  writeReviewOnBook,
  addTagsToBook,
  editTagsInBook,
};
