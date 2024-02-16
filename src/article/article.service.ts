import { insert, findOneByAccount, query, countQuery, queryById ,countQueryWithStar,queryWithStar} from "./article.dao";
import { HttpError } from "../app/errors/httpErrors";
import { compare, hash } from "../util/bcrypt";
import { BussinessErrors } from "../app/errors/BussinsessErrors";

class ArticleService {
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
  async pageQuery(
    page: any,
    author: any,
    start: any,
    end: any,
    title: any,
    content: any,
    tagName: any,
    id: any,
    source: any,
  ) {
    const count = await countQuery(
      author,
      start,
      end,
      title,
      content,
      tagName,
      id,
      source,
    );

    const list = await query(
      page,
      author,
      start,
      end,
      title,
      content,
      tagName,
      id,
      source,
    );
    return {
      count: count["count"],
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      hasNext: page.pageNumber * page.pageSize < count["count"],
      list: list,
    };
  }

  async queryById(
    id: any,
  ) {
    return (await queryById(id))[0];
  }


  async pageQueryWithStar(page: any,userId: any) {

    const count = await countQueryWithStar(userId);

    const list = await queryWithStar(page,userId);

    
    return {
      count: count["count"],
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      hasNext: page.pageNumber * page.pageSize < count["count"],
      list: list,
    };
  }

}

export const articleService = new ArticleService();
