import KoaRouter from "koa-router";
import { userController } from "./user.controller";
import { articleController } from "../article/article.controller";

export const userRouter = new KoaRouter({ prefix: "/user" });

// 注册controller（暂时我没发现有好的方法可以自动注册。。先用着吧
userRouter.get("/login", userController.login); //Path    Query
userRouter.post("/register", userController.register); //Path    Query
