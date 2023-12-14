import { Controller, Get, Route, Request, Middlewares } from "tsoa";
import express from "express";

import authMiddleware from "misc/authMiddleware";

@Route("users")
export class UserController extends Controller {
  @Get("userInfo")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getUserInfo(@Request() req: express.Request) {
    return req.oidc.fetchUserInfo();
  }
}
