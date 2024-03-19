import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import userModel from "../models/user.model";
import { DecodeJWT } from "../../env";

async function protect(req: Request | any, res: Response, next: NextFunction) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_SECRET!) as DecodeJWT;
      req.user = await userModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
  } else {
    console.log("You are not authenticated I think?");
    res.status(400).json({ message: "Bro you are not authenticated ._." });
  }
}

export default protect;
