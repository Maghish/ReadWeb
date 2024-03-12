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
async function createBook(req: Response, res: Response) {}
async function editBook(req: Response, res: Response) {}
async function deleteBook(req: Response, res: Response) {}
async function rateBook(req: Response, res: Response) {}
async function writeReviewOnBook(req: Response, res: Response) {}
async function addTagsToBook(req: Response, res: Response) {}
async function editTagsInBook(req: Response, res: Response) {}

export default {};
