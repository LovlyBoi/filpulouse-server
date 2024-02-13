import { type Middleware } from "koa";
import { userService } from "./user.service";
import { HTTP_NOT_FOUND_ERROR } from "../app/errors/httpErrors";
import { HTTP_UNAUTHORIZED_ERROR } from "../app/errors/httpErrors";
import { NotEmpty, IsEmpty } from "../util/StringUtils";
import { HttpError } from "../app/errors/httpErrors";
import { tokenUtil } from "../util/jwtUtil";
import { BussinessErrors } from "../app/errors/BussinsessErrors";

class UserController {
  check: Middleware = async (ctx, next) => {
    if (ctx.headers["token"] == null) {
      throw HTTP_UNAUTHORIZED_ERROR;
    }
    next();
  };

  login: Middleware = async (ctx, next) => {
    //验证
    const account = ctx.query["account"];
    const password = ctx.query["password"];
    if (IsEmpty(account) || IsEmpty(password)) {
      throw new HttpError(50001, "账号密码不能为空");
    }
    await userService.login(account, password);

    //获得token
    const user = await userService.getByAccount(account);
    let userToken;
    try {
      userToken = await tokenUtil.signToken({
        account,
        userId: user.id,
        enable: user.enable,
      });
    } catch (error) {
      console.log(error)
      ctx.status = 500;
      ctx.body = "Internal Server Error";
    }
    ctx.body = { code: 200, msg: "success", data: { token: userToken } };
  };

  findOne: Middleware = async (ctx, next) => {
    const id = ctx.params.id;
    const cat = userService.getByAccount(id);
    // 直接抛出错误，交给统一错误处理
    if (!cat) throw HTTP_NOT_FOUND_ERROR;
    ctx.body = cat;
  };

  register: Middleware = async (ctx, next) => {
    const body = ctx.request.body as any;
    console.log(body);
    if (!(await userService.register(body.account, body.password))) {
      throw new BussinessErrors(50000, "注册失败");
    }
    ctx.body = {
      code: 200,
      msg: "success",
    };
  };
}

export const userController = new UserController();
