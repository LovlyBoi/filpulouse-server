import KoaRouter from 'koa-router'
import { catController } from './cat.controller'

export const catRouter = new KoaRouter({ prefix: '/cats'})










// 注册controller（暂时我没发现有好的方法可以自动注册。。先用着吧
catRouter.get('/', catController.findAll)
catRouter.get('/:id', catController.findOne)  //Path    Query   
