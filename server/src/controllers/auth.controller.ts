import { Request, Response } from "express";
import UserModel from "../models/auth.model";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";

function generateToken(id: any) {
  return sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
}

async function signupUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;

    UserModel.findOne({
      username: username,
    }).then(response => {
      if (response) {
        return res.status(400).json({
          message:
            "User already exist with same username, try different username",
        });
      }
    }).catch((error: any) => {});

    UserModel.findOne({
      email: email,
    }).then((response) => {
      if (response) {
        return res.status(400).json({
          message:
            "User already exist with same email, try different email",
        });
      }
    }).catch((error: any) => {});

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      username: username,
      email: email, 
      password: hashedPassword,
      favoriteBooks: []
    })

    await newUser.save();

    return res.status(200).json({
      message: "Successfully created new user",
      token: generateToken(newUser._id),
      userData: newUser,
    });

  } catch (error: any) {
    return res.status(400).json({ message: error });
  }
}

export { signupUser };
