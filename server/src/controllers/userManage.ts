import { Request, Response } from "express";

// Models
import userModel from "../models/userModel";

async function createNewUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    const newUser = new userModel({
      username: username,
      email: email,
      password: password,
      favoriteBooks: [],
    });
    await newUser.save();
    res
      .status(200)
      .json({ message: "Successfully created new user", token: atob(email) });
  } catch (error) {
    throw error;
  }
}

function authenticateUser(req: Request, res: Response) {}
function editUserData(req: Request, res: Response) {}

export { createNewUser, authenticateUser, editUserData };
