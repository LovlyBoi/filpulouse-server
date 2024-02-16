import { type Middleware } from "koa";
import { articleService } from "./article.service";
import { HTTP_UNAUTHORIZED_ERROR } from "../app/errors/httpErrors";
import { NotEmpty, IsEmpty } from "../util/StringUtils";
import { BussinessErrors } from "../app/errors/BussinsessErrors";
import { tokenUtil } from "../util/jwtUtil";

class ArticleController {
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
    const body = ctx.request.body;
    console.log(body);
    if (IsEmpty(body)) {
      throw new BussinessErrors(50004, "save参数不能为空");
    }
    if (await articleService.save(body)) {
      ctx.body = { code: 200, msg: "success" };
      return;
    }
    throw new BussinessErrors(50005, "保存失败");
  };

  queryById: Middleware = async (ctx, next) => {
    console.log(11111,ctx.query["id"])
    const r = await articleService.queryById(ctx.query['id']);
    if (!IsEmpty(r)){
      ctx.body = {
        code:200,
        message:"success",
        data:r
      }
      return;
    }
    ctx.body = {
      code:50010,
      message:"no article with such id",
      data:null
    }
  };


  page: Middleware = async (ctx, next) => {
    let pageSize = ctx.query["pageSize"];
    pageSize == null ? 10 : pageSize;
    let pageNumber = ctx.query["pageNumber"];
    pageNumber == null ? 0 : pageNumber;

    const data = await articleService.pageQuery(
      { pageSize, pageNumber },
      ctx.query["author"],
      ctx.query["start"],
      ctx.query["end"],
      ctx.query["title"],
      ctx.query["content"],
      ctx.query["tagName"],
      ctx.query["id"],
      ctx.query["source"],
    );

    ctx.body = {
      code: 200,
      msg: "success",
      data,
    };
  };
}

export const articleController = new ArticleController();
