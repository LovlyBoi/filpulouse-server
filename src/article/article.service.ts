import { insert, findOneByAccount, query, countQuery } from "./article.dao";
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

    console.log(count);
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
    console.log(list);
    return {
      count: count["count"],
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      list: list,
    };
  }
}

export const articleService = new ArticleService();
