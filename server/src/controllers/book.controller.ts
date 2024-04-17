import { Request, Response } from "express";
import BookModel from "../models/book.model";

async function getBook(req: Request, res: Response) {
  try {
    
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}
async function getAllBook(req: Request, res: Response) {}
async function rateBook(req: Request, res: Response) { }
async function commentOnBook(req: Request, res: Response) {}
async function clickBook(req: Request, res: Response) { }
async function writeBook(req: Request, res: Response) { }
async function editBook(req: Request, res: Response) { }
async function deleteBook(req: Request, res: Response) { }

export { getBook, getAllBook, rateBook, commentOnBook, clickBook, writeBook, editBook, deleteBook }