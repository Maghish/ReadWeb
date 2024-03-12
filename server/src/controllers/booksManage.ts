import { Request, Response } from "express";
import { authenticateUser } from "./userManage";
import bookModel from "../models/bookModel";

async function getAllBooks(req: Request, res: Response) {
  const { token, filter, extraData } = req.body;
  const user = await authenticateUser(token);
  if (user) {
    if (filter === "None") {
    }
    if (filter === "User") {
    }
    if (filter === "Tag") {
    }
  }
}
async function getBook(req: Request, res: Response) {}
async function createBook(req: Request, res: Response) {}
async function editBook(req: Request, res: Response) {}
async function deleteBook(req: Request, res: Response) {}
async function rateBook(req: Request, res: Response) {}
async function writeReviewOnBook(req: Request, res: Response) {}
async function addTagsToBook(req: Request, res: Response) {}
async function editTagsInBook(req: Request, res: Response) {}

export default {};
