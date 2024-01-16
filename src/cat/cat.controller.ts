import { type Middleware } from "koa";
import { catService } from "./cat.service";
import { HTTP_NOT_FOUND_ERROR } from "../app/errors/httpErrors";

class CatController {
  findAll: Middleware = async (ctx, next) => {
    // ctx 里面有所有请求和响应的封装，next可以控制请求流向下一层中间件
    const cats = catService.getAllCats()

    // ctx.body 给请求返回响应体
    ctx.body = cats;
  };

  findOne: Middleware = async (ctx, next) => {
    const id = ctx.params.id;
    const cat = catService.getCatById(id);
    // 直接抛出错误，交给统一错误处理
    if (!cat) throw HTTP_NOT_FOUND_ERROR;

    ctx.body = cat;
  }
}

export const catController = new CatController();
