import { Middleware } from "koa"
import { HttpError } from "./httpErrors"
import { CustomError } from "./customErrors"

export const errorHandler: Middleware = (ctx, next) => {
  return next().catch((err) => {
    if (err instanceof HttpError) {
      ctx.status = err.code
      ctx.body = err.msg
    } else if (err instanceof CustomError) {
      // 也可以在这里选择返回200，内部再写错误码
      ctx.status = err.code
      ctx.body = err.msg
    } else {
      ctx.status = 500
      ctx.body = "Internal Server Error"
    }
  })
}