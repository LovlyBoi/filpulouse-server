import { IsEmpty } from "../util/StringUtils";
import { pool } from "../app/database";

/**
 * `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` date DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `content` text,
  `tag_name` varchar(255) DEFAULT NULL,
  `tag_color` varchar(255) DEFAULT NULL,
  `pics` varchar(1024) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
 * @param body 
 * @returns 
 */
export async function insert(body: any) {
  console.log("123123", body);
  const result = (await pool.execute(
    `INSERT INTO article(create_time,title,source,author,content,tag_name,tag_color,pics,type) values (?,?,?,?,?,?,?,?,?)`,
    [
      new Date(),
      body.title,
      body.source,
      body.author,
      body.content,
      body.tagName,
      body.tagColor,
      body.pics,
      body.type,
    ],
  )) as unknown as any[];
  return result[0];
}

export async function query(
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
  let sql = `SELECT * FROM article WHERE 1=1 `;
  let paramArr = [];

  if (!IsEmpty(start) && !IsEmpty(end)) {
    sql += `AND (create_time between ? AND ?)`;
    paramArr[paramArr.length] = start;
    paramArr[paramArr.length] = end;
  }
  if (!IsEmpty(author)) {
    sql += `AND (author = ? )`;
    paramArr[paramArr.length] = author;
  }
  if (!IsEmpty(title)) {
    sql += `AND (title LIKE ? )`;
    paramArr[paramArr.length] = `%${title}%`;
  }
  if (!IsEmpty(content)) {
    sql += `AND (content LIKE ? )`;
    paramArr[paramArr.length] = `%${content}%`;
  }
  if (!IsEmpty(tagName)) {
    sql += `AND (tagName LIKE ? )`;
    paramArr[paramArr.length] = `%${tagName}%`;
  }
  if (!IsEmpty(source)) {
    sql += `AND (source LIKE ? )`;
    paramArr[paramArr.length] = `%${source}%`;
  }
  if (!IsEmpty(id)) {
    sql += `AND (id = ? )`;
    paramArr[paramArr.length] = id;
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

export async function countQuery(
  author: any,
  start: any,
  end: any,
  title: any,
  content: any,
  tagName: any,
  id: any,
  source: any,
) {
  let sql = `SELECT * FROM article WHERE 1=1 `;
  let paramArr = [author];

  if (!IsEmpty(start) && !IsEmpty(end)) {
    sql += `AND (create_time between ? AND ?)`;
    paramArr[paramArr.length] = start;
    paramArr[paramArr.length] = end;
  }
  if (!IsEmpty(author)) {
    sql += `AND (author = ? )`;
    paramArr[paramArr.length] = author;
  }
  if (!IsEmpty(title)) {
    sql += `AND (title LIKE ? )`;
    paramArr[paramArr.length] = `%${title}%`;
  }
  if (!IsEmpty(content)) {
    sql += `AND (content LIKE ? )`;
    paramArr[paramArr.length] = `%${content}%`;
  }
  if (!IsEmpty(tagName)) {
    sql += `AND (tagName LIKE ? )`;
    paramArr[paramArr.length] = `%${tagName}%`;
  }
  if (!IsEmpty(source)) {
    sql += `AND (source LIKE ? )`;
    paramArr[paramArr.length] = `%${source}%`;
  }
  if (!IsEmpty(id)) {
    sql += `AND (id = ? )`;
    paramArr[paramArr.length] = id;
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

export async function queryById(id: any) {
  const result = (await pool.execute(`select * from article where id = ?`, [
    id,
  ])) as unknown as any[];
  return result[0];
}
