import KoaRouter from "koa-router";
import { articleUserRelationController } from "./articleUserRelation.controller";

export const articleUserRelationRouter = new KoaRouter({
  prefix: "/articleUserRelation",
});

// 注册controller（暂时我没发现有好的方法可以自动注册。。先用着吧
articleUserRelationRouter.post(
  "/save",
  articleUserRelationController.check,
  articleUserRelationController.save
);

articleUserRelationRouter.get(
  "/page",
  articleUserRelationController.check,
  articleUserRelationController.page
);

articleUserRelationRouter.get(
  "/queryByArticleId",
  articleUserRelationController.check,
  articleUserRelationController.queryByArticleId
);

articleUserRelationRouter.get(
  "/queryFavorites",
  articleUserRelationController.check,
  articleUserRelationController.queryFavorites
);
