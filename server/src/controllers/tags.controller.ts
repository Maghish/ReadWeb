// Then complete getAllBooks function
// Work on other functions
// At last mention a route for all of the controllers

/* 
  There is no function for creating or editing tags, because any normal users should not add or edit tags and only admins have the access to it.
  Admins would rather edit the MongoDB database itself manually
*/

import { Request, Response } from "express";
import tagModel from "../models/tag.model";

async function getAllTags(req: Request, res: Response) {
  try {
    const allTags = await tagModel.find({});
    res
      .status(200)
      .json({ message: "Successfully fetched all tags", allTags: allTags });
    
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
    const { name } = req.body;
    const tag = await tagModel.find({ name: name });
    res
      .status(200)
      .json({ message: "Successfully fetched tag", tagData: tag });
  
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

export { getTag, getAllTags };
