import type Koa from "koa";
import type KoaRouter from "koa-router";

import { catRouter } from "../cat/cat.router";

// 给每一个模块的路由注册进来
const routes: KoaRouter[] = [
  catRouter,
];

export function registRoutes(app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
  // 注册路由
  for (const route of routes) {
    // 注册到主应用上
    app.use(route.routes());
    // 不允许使用未定义的方法
    app.use(route.allowedMethods());
  }
}
