import { type Middleware } from "koa";
import { catService } from "./user.service";
import { HTTP_NOT_FOUND_ERROR } from "../app/errors/httpErrors";
import { HTTP_UNAUTHORIZED_ERROR} from "../app/errors/httpErrors"
import { NotEmpty , IsEmpty} from '../util/StringUtils'
import {HttpError} from '../app/errors/httpErrors'

class UserController {

  
  check: Middleware = async (ctx, next) => {

    if (ctx.headers['token'] == null ){
      throw HTTP_UNAUTHORIZED_ERROR;
    }
      next()

  };

  login: Middleware = async (ctx, next) => {
    const account = ctx.query['account'];
    const password = ctx.query['password'];

    if ( IsEmpty(account)  ||  IsEmpty(password)  ){
      throw new HttpError(50001,"账号密码不能为空");
    }

    


    next()

  }




  findOne: Middleware = async (ctx, next) => {
    const id = ctx.params.id;
    const cat = catService.getCatById(id);
    // 直接抛出错误，交给统一错误处理
    if (!cat) throw HTTP_NOT_FOUND_ERROR;

    ctx.body = cat;
  }



}

export const userController = new UserController();
