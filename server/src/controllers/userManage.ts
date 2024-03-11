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
  } catch (error: any) {
    if (error.response) {
      res.status(400).json({ message: error.response });
    } else {
      res
        .status(400)
        .json({ message: "Unexpected error occurred please try again" });
      throw error;
    }
  }
}

async function authenticateUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const allUsers = await userModel.find({ email: email });
    // No user account found
    if (allUsers.length <= 0) {
      res.status(400).json({ message: "User not found" });
    }

    // Check if user account's password is same
    if (allUsers[0].password === password) {
      res
        .status(200)
        .json({
          message: "Successfully authenticated user",
          token: atob(email),
        });
    }
    // Else
    else {
      res.status(200).json({ message: "Password not correct" });
    }
  } catch (error: any) {
    if (error.response) {
      res.status(400).json({ message: error.response });
    } else {
      res
        .status(400)
        .json({ message: "Unexpected error occurred please try again" });
      throw error;
    }
  }
}

async function getCurrentUser(req: Request, res: Response) {}

function editUserData(req: Request, res: Response) {}

export { createNewUser, authenticateUser, editUserData };
