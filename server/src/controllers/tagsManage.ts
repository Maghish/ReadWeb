// Make tag model
// Then create a field in book model to accept all tags created with tagModel
// Then complete getAllBooks function
// Work on other functions
// At last mention a route for all of the controllers

/* 
  There is no function for creating or editing tags, because any normal users should not add or edit tags and only admins have the access to it.
  Admins would rather edit the MongoDB database itself manually
*/

import { Request, Response } from "express";
import { authenticateUser } from "./userManage";
import tagModel from "../models/tagModel";

async function getAllTags(req: Request, res: Response) {
  try {
    const { token } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      const allTags = await tagModel.find({});
      res
        .status(200)
        .json({ message: "Successfully fetched all tags", allTags: allTags });
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

async function getTag(req: Request, res: Response) {
  try {
    const { token, name } = req.body;
    const user = await authenticateUser(token);
    if (user) {
      const tag = await tagModel.find({ name: name });
      res
        .status(200)
        .json({ message: "Successfully fetched tag", tagData: tag });
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
