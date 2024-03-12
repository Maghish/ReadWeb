import { Request, Response } from "express";

// Models
import userModel from "../models/userModel";

async function authenticateUser(token: string) {
  const email = btoa(token);
  // It is 100% sure that the given token will be valid so we don't need error checking
  const allFoundUsers = await userModel.find({ email: email });
  const user = allFoundUsers[0];
  return user;
}

async function getUser(req: Request, res: Response) {
  try {
    const { token, username } = req.body;
    const currentUser = await authenticateUser(token);
    if (currentUser) {
      const allFoundUsers = await userModel.find({ username: username });
      const user = allFoundUsers[0];
      res
        .status(200)
        .json({ message: "Successfully found user", userData: user });
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

async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const allUsers = await userModel.find({ email: email });
    // No user account found
    if (allUsers.length <= 0) {
      res.status(400).json({ message: "User not found" });
    }

    // Check if user account's password is same
    if (allUsers[0].password === password) {
      res.status(200).json({
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

async function getCurrentUser(req: Request, res: Response) {
  try {
    const { token } = req.body;
    const user = await authenticateUser(token);
    res
      .status(200)
      .json({ message: "Successfully found current user", userData: user });
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

async function editUserData(req: Request, res: Response) {
  try {
    const { token, mode, newData } = req.body; // newData is the data that need to be edited
    const user = await authenticateUser(token);

    if (mode === "email") {
      try {
        user.email = newData;
        user.save();
      } catch (error) {
        res
          .status(400)
          .json({ message: "Unexpected error occurred, please try again" });
      }
    }
    if (mode === "password") {
      try {
        user.password = newData;
        user.save();
      } catch (error) {
        res
          .status(400)
          .json({ message: "Unexpected error occurred, please try again" });
      }
    }
    if (mode === "username") {
      try {
        user.username = newData;
        user.save();
      } catch (error) {
        res
          .status(400)
          .json({ message: "Unexpected error occurred, please try again" });
      }
    }
  } catch (error: any) {
    if (error.response) {
      res.status(400).json({ message: error.response });
    } else {
      res
        .status(400)
        .json({ message: "Unexpected error occurred, please try again" });
      throw error;
    }
  }
}

export { createNewUser, loginUser, getCurrentUser, editUserData, getUser };
