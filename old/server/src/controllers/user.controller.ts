import { Request, Response } from "express";
import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { DecodeJWT } from "../../env";

function generateToken(id: any) {
  return sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
}

async function GetCurrentUserUtilFunction(req: Request) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = verify(token, process.env.JWT_SECRET!) as DecodeJWT;
    const user = await userModel.findById(decoded.id).select("-password");
    return user;
  } else {
    return null;
  }
}

async function getUser(req: Request, res: Response) {
  try {
    const { username } = req.body;
    const user = await userModel.findOne({ username: username });
    res
      .status(200)
      .json({ message: "Successfully found user", userData: user });
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
    userModel.findOne({ username: username }).then((response) => {
      if (response) {
        return res
          .status(400)
          .json({ message: "User already exists with the same username" });
      }
    });
    userModel.findOne({ email: email }).then((response) => {
      if (response) {
        return res
          .status(400)
          .json({ message: "User already exists with the same email" });
      }
    });

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
      favoriteBooks: [],
    });

    await newUser.save();

    return res.status(200).json({
      message: "Successfully created new user",
      token: generateToken(newUser._id),
      userData: newUser,
    });
  } catch (error: any) {
    if (error.response) {
      return res.status(400).json({ message: error.response });
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
    const foundUser = await userModel.findOne({ email: email });

    if (foundUser && (await bcrypt.compare(password, foundUser!.password))) {
      res.status(200).json({
        message: "Successfully authenticated user",
        token: generateToken(foundUser._id),
        userData: foundUser
      });
    } else {
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
    const currentUser = await GetCurrentUserUtilFunction(req);
    if (currentUser) {
      res
        .status(200)
        .json({
          message: "Successfully got the current user",
          userData: currentUser,
        });
    } else {
      res.status(400).json({ message: "You are not logged in!" });
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

async function editUserData(req: Request, res: Response) {
  try {
    const { mode, newData } = req.body; // newData is the data that need to be edited

    const user = await GetCurrentUserUtilFunction(req);
    if (user) {
      if (mode === "email") {
        try {
          user.email = newData;
          const editedUser = await user.save();
          res
            .status(200)
            .json({
              message: "Successfully edited the user",
              editedUser: editedUser,
            });
        } catch (error) {
          res
            .status(400)
            .json({ message: "Unexpected error occurred, please try again" });
        }
      }
      if (mode === "password") {
        try {
          user.password = newData;
          const editedUser = await user.save();
          res.status(200).json({
            message: "Successfully edited the user",
            editedUser: editedUser,
          });
        } catch (error) {
          res
            .status(400)
            .json({ message: "Unexpected error occurred, please try again" });
        }
      }
      if (mode === "username") {
        try {
          user.username = newData;
          const editedUser = await user.save();
          res.status(200).json({
            message: "Successfully edited the user",
            editedUser: editedUser,
          });
        } catch (error) {
          res
            .status(400)
            .json({ message: "Unexpected error occurred, please try again" });
        }
      }
    } else {
      res.status(400).json({ message: "You are not logged in!" });
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

export {
  createNewUser,
  loginUser,
  getCurrentUser,
  editUserData,
  getUser,
  GetCurrentUserUtilFunction,
};
