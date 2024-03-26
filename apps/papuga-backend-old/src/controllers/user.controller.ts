import express from "express";
import {
  Controller,
  Get,
  Route,
  Request,
  Middlewares,
  Path,
  Post,
  TsoaResponse,
  Res,
  Tags
} from "tsoa";

import { User } from "@pck/papuga-types";

import authMiddleware from "misc/authMiddleware";
import UserRepository from "repositories/user.repository";
import { syncUsersWithIDP } from "services/user.service";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  /* OIDC routes */

  @Get("userInfo")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getUserInfo(@Request() req: express.Request) {
    return await req.oidc.fetchUserInfo();
  }

  @Post("syncWithIDP")
  @Middlewares(authMiddleware(["admin"]))
  public async syncWithIDP() {
    return await syncUsersWithIDP();
  }

  /* REST routes */

  @Get("")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getUsers(): Promise<User[]> {
    return UserRepository.find();
  }

  @Get("{id}")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getUser(
    @Path() id: string,
    @Res() notFoundResponse: TsoaResponse<422, { code: 422; details: string }>
  ) {
    const user = await UserRepository.findOneBy({ id });

    if (!user) {
      return notFoundResponse(422, {
        code: 422,
        details: `User with id ${id} could not be found`
      });
    }

    return user;
  }
}
