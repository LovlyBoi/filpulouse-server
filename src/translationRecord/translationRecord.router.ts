import KoaRouter from 'koa-router'
import { translationRecordController } from './translationRecord.controller'

export const translationRecordRouter = new KoaRouter({ prefix: '/translationRecord'})



// 注册controller（暂时我没发现有好的方法可以自动注册。。先用着吧
translationRecordRouter.post('/save', translationRecordController.check,translationRecordController.save)  //Path    Query   
translationRecordRouter.get('/page', translationRecordController.check,translationRecordController.page)  //Path    Query   
translationRecordRouter.post('/unStarById', translationRecordController.check,translationRecordController.unStarById)  //Path    Query   
