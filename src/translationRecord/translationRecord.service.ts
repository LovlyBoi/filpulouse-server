import {
  insert,
  findOneByAccount,
  query,
  countQuery,
  unStar,
  getAllByArticleId
} from "./translationRecord.dao";

class TranslationRecordService {
  getByAccount(id: string) {
    return findOneByAccount(id);
  }

  async save(body: any) {
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
  async pageQuery(page: any, userId: any, start: any, end: any) {
    const count = await countQuery(userId, start, end);

    const list = await query(page, userId, start, end);
    
    return {
      count: count["count"],
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      hasNext: page.pageNumber * page.pageSize < count["count"],
      list: list,
    };
  }
  async unStar(from :any , to:any ,articleId:any, userId: any) {
    const r = await unStar(from,to , articleId ,userId);
    return r.affectedRows >= 1;
  }

  async getAllByArticleId(id:any) {
    return await getAllByArticleId(id);
  }
  
}

export const translationRecordService = new TranslationRecordService();
