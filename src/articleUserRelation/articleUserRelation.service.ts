import {
  insert,
  findOneByAccount,
  query,
  countQuery,
  getByArticleId,
} from "./articleUserRelationdao";
import { HttpError } from "../app/errors/httpErrors";
import { compare, hash } from "../util/bcrypt";
import { BussinessErrors } from "../app/errors/BussinsessErrors";

class ArticleUserRelationService {
  getByAccount(id: string) {
    return findOneByAccount(id);
  }

  async save(articleId: any, userId: any) {
    const result = await insert(articleId, userId);
    return result.affectedRows === 1;
  }

  async getByArticleId(articleId: any, userId: any) {
    return await getByArticleId(articleId, userId);
  }

  /**
   * 分页查询
   * @param page
   * @param userId
   * @param start
   * @param end
   * @returns
   */
  async pageQuery(page: any, articleId: any) {
    const count = await countQuery(articleId);
    const list = await query(page, articleId);

    return {
      count: count["count"],
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      hasNext: page.pageNumber * page.pageSize < count["count"],
      list: list,
    };
  }
}

export const articleUserRelationService = new ArticleUserRelationService();
