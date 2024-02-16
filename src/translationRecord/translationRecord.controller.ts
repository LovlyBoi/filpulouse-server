import { type Middleware } from "koa";
import { translationRecordService } from "./translationRecord.service";
import { HTTP_UNAUTHORIZED_ERROR } from "../app/errors/httpErrors";
import { NotEmpty, IsEmpty } from "../util/StringUtils";
import { BussinessErrors } from "../app/errors/BussinsessErrors";
import { tokenUtil } from "../util/jwtUtil";

class TranslationRecordController {
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
    if (await translationRecordService.save(body)) {
      ctx.body = { code: 200, msg: "success" };
      return;
    }
    throw new BussinessErrors(50005, "保存失败");
  };

  page: Middleware = async (ctx, next) => {
    const tokenData = ctx.tokenData;
    let pageSize = ctx.query["pageSize"];
    pageSize == null ? 10 : pageSize;
    const pageNumber = ctx.query["pageNumber"];
    pageNumber == null ? 0 : pageNumber;

    const data = await translationRecordService.pageQuery(
      { pageSize, pageNumber },
      tokenData.userId,
      ctx.query["start"],
      ctx.query["end"],
    );
    ctx.body = {
      code: 200,
      msg: "success",
      data,
    };
  };

  unStarById: Middleware = async (ctx, next) => {
    const translationRecordId = (ctx.request.body as any).translationRecordId;
    const userId = ctx.tokenData.userId;
    if (!(await translationRecordService.unStar(translationRecordId, userId))) {
      throw new BussinessErrors(50000, "取消失败");
    }
    ctx.body = {
      code: 200,
      msg: "success",
    };
  };

  getAllByArticleId: Middleware = async (ctx, next) => {

    let list = await translationRecordService.getAllByArticleId(ctx.query['articleId'])

    console.log('await',list)
    ctx.body = {
      code: 200,
      msg: "success",
      list
    };
  }


}

export const translationRecordController = new TranslationRecordController();
