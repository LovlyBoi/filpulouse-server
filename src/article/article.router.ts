import KoaRouter from "koa-router";
import { articleController } from "./article.controller";

export const articleRouter = new KoaRouter({ prefix: "/article" });

// 注册controller（暂时我没发现有好的方法可以自动注册。。先用着吧
articleRouter.post("/save", articleController.check, articleController.save); //Path    Query
articleRouter.get("/page", articleController.page); //Path    Query
articleRouter.get("/queryById",articleController.queryById); //Path    Query
