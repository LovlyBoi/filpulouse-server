import {insert,findOneByAccount,query,countQuery,unStar} from "./translationRecord.dao"
import {HttpError} from '../app/errors/httpErrors'
import {compare,hash} from "../util/bcrypt"
import { BussinessErrors } from "../app/errors/BussinsessErrors";

class TranslationRecordService {

  getByAccount(id: string) {
    return findOneByAccount(id);
  }

  async save(body:any){
    const result = await insert(body);
    return result.affectedRows === 1;
  }

  /**
   * 分页查询
   * @param page 
   * @param userId 
   * @param start 
   * @param end 
   * @returns 
   */
  async pageQuery(page:any,userId:any,start:any,end:any){
    const count = await countQuery(userId,start,end);
    
    const list = await query(page,userId,start,end);
    console.log(list)
    return {
        count:count['count'],
        pageNumber:page.pageNumber ,
        pageSize : page.pageSize,
        hasNext: page.pageNumber*page.pageSize <count['count'],
        list:list,
    };
  }
  async unStar(translationRecordId:any,userId:any){
    const r  = await unStar(translationRecordId,userId);
    return r.affectedRows===1;
  }
  

}

export const translationRecordService = new TranslationRecordService();