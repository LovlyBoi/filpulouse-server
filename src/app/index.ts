import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import { registRoutes } from "./registRoutes";
import { errorHandler } from "./errors/errorHandler";
import "./loadEnv";
import "./database";

const app = new Koa({
  proxy: true,
});

// 错误处理(需要在注册路由之前注册)
app.use(errorHandler);
// // 初始化数据库
// initDataBase();

app.use(cors());

// 解析请求体
app.use(bodyParser());

registRoutes(app);

export default app;
