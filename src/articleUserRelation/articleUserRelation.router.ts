import KoaRouter from "koa-router";
import { articleUserRelationController } from "./articleUserRelation.controller";

export const articleUserRelationRouter = new KoaRouter({
  prefix: "/articleUserRelation",
});

// 注册controller（暂时我没发现有好的方法可以自动注册。。先用着吧
articleUserRelationRouter.post(
  "/save",
  articleUserRelationController.check,
  articleUserRelationController.save,
); //Path    Query
articleUserRelationRouter.get(
  "/page",
  articleUserRelationController.check,
  articleUserRelationController.page,
); //Path    Query
articleUserRelationRouter.get(
  "/queryByArticleId",
  articleUserRelationController.check,
  articleUserRelationController.queryByArticleId,
); //Path    Query
