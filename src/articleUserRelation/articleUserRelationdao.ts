import { IsEmpty } from "../util/StringUtils";
import { pool } from "../app/database";

/**
`user_id` bigint DEFAULT NULL,
  `article_id` bigint DEFAULT NULL,
  `create_time` date DEFAULT NULL
 * @param body 
 * @returns 
 */
export async function insert(articleId: any, userId: any) {
  const result = (await pool.execute(
    `INSERT INTO user_article_relation(user_id,article_id,create_time) values (?,?,?)`,
    [articleId, userId, new Date()]
  )) as unknown as any[]; // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0];
}

export async function getByArticleId(articleId: any, userId: any) {
  let sql = `SELECT * FROM user_article_relation WHERE user_id =${userId} AND article_id = ${articleId}`;

  const [row, fields] = (await pool.query(sql, [])) as unknown as any[]; // 懒得写类型，就给他强制转为any。如果你想写实体类也行

  return row[0];
}

export async function query(page: any, articleId: any) {
  let sql = `SELECT * FROM user_article_relation WHERE 1=1 `;
  let paramArr = [];
  if (!IsEmpty(articleId)) {
    sql += `AND (article_id = ? )`;
    paramArr[paramArr.length] = articleId;
  }

  if (!IsEmpty(page)) {
    sql += ` limit ? , ? `;
    paramArr[paramArr.length] = (page.pageNumber - 1) * page.pageSize;
    paramArr[paramArr.length] = page.pageSize * 1;
  }
  console.log(sql, paramArr);
  const result = (await pool.query(sql, paramArr)) as unknown as any[];
  return result[0];
}

export async function countQuery(articleId: any) {
  let sql = `SELECT * FROM user_article_relation WHERE 1=1 `;
  let paramArr = [];

  if (!IsEmpty(articleId)) {
    sql += `AND (article_id = ? )`;
    paramArr[paramArr.length] = articleId;
  }
  sql = `SELECT COUNT(1)'count' FROM  (${sql})AS A  `;
  const result = (await pool.query(sql, paramArr)) as unknown as any[];
  return result[0][0];
}

export async function findOneByAccount(account: string) {
  const result = (await pool.execute(`select * from user where account = ?`, [
    account,
  ])) as unknown as any[];
  return result[0];
}

export async function findFavoriteArticleIds(userId: number) {
  const sql = `select article_id from translation_record where user_id = ? group by article_id;`;
  const result = (await pool.execute(sql, [userId])) as unknown as any[];
  return result[0];
}

export async function findArticlesByIds(ids: number[], ps: number, pn: number) {
  const placeholder = ids.map(() => "?").join(", ");
  const sql = `select * from article where id in (${placeholder}) limit ${ps} offset ${(pn - 1) * ps};`;
  const result = (await pool.execute(sql, ids)) as unknown as any[];
  return result[0];
}

export async function findArticlesCountByIds(ids: number[]) {
  const placeholder = ids.map(() => "?").join(", ");
  const sql = `select count(*) as total from article where id in (${placeholder});`;
  const result = (await pool.execute(sql, ids)) as unknown as any[];
  return result[0];
}
