import { type Middleware } from "koa";
import { articleUserRelationService } from "./articleUserRelation.service";
import { HTTP_UNAUTHORIZED_ERROR } from "../app/errors/httpErrors";
import { NotEmpty, IsEmpty } from "../util/StringUtils";
import { BussinessErrors } from "../app/errors/BussinsessErrors";
import { tokenUtil } from "../util/jwtUtil";

class ArticleUserRelationController {
  check: Middleware = async (ctx, next) => {
    const token = ctx.headers["token"] as string;
    if (token == null) {
      throw HTTP_UNAUTHORIZED_ERROR;
    }
    const v = await tokenUtil.verifyToken(token);
    if (v[0] !== true) {
      throw new BussinessErrors(50000, "token错误");
    }
    ctx.tokenData = v[1];
    await next();
  };

  save: Middleware = async (ctx, next) => {
    const body = ctx.request.body as any;
    console.log(body);
    if (IsEmpty(body)) {
      throw new BussinessErrors(50004, "save参数不能为空");
    }

    if (
      await articleUserRelationService.save(
        ctx.tokenData.userId,
        body.articleId,
      )
    ) {
      ctx.body = { code: 200, msg: "success" };
      return;
    }
    throw new BussinessErrors(50005, "保存失败");
  };

  queryByArticleId: Middleware = async (ctx, next) => {
    const r = await articleUserRelationService.getByArticleId(
      ctx.tokenData.userId,
      ctx.query["articleId"],
    );
    ctx.body = {
      code: "200",
      msg: "success",
      data: r,
    };
  };

  page: Middleware = async (ctx, next) => {
    let pageSize = ctx.query["pageSize"];
    pageSize == null ? 10 : pageSize;
    let pageNumber = ctx.query["pageNumber"];
    pageNumber == null ? 0 : pageNumber;

    const data = await articleUserRelationService.pageQuery(
      { pageSize, pageNumber },
      ctx.query["articleId"],
    );

    ctx.body = {
      code: 200,
      msg: "success",
      data,
    };
  };
}

export const articleUserRelationController =
  new ArticleUserRelationController();
