import { IsEmpty } from "../util/StringUtils";
import { pool } from "../app/database";


/**
 * 
 * @param body  
 * `from` bigint DEFAULT NULL,
  `to` bigint DEFAULT NULL,
  `word` varchar(1024) DEFAULT NULL,
  `index` int DEFAULT NULL,
  `success` int DEFAULT NULL,
  `accent` varchar(64) DEFAULT NULL,
  `mean_cn` varchar(1024) DEFAULT NULL,
  `mean_en` varchar(1024) DEFAULT NULL,
  `sentence` varchar(1024) DEFAULT NULL,
  `sentence_trans` varchar(1024) DEFAULT NULL,
  `sentence_phrase` varchar(1024) DEFAULT NULL,
  `word_etyma` varchar(255) DEFAULT NULL,
 * @returns 
 */
export async function insert(body: any) {

  console.log([
    new Date(),
    body.articleId,
    body.originStatement,
    body.result,
    body.userId,
    body.translation.from,
    body.translation.to,
    body.translation.word,
    body.translation.index,
    body.translation.success,
    body.translation.accent,
    body.translation.mean_cn,
    body.translation.mean_en,
    body.translation.sentence,
    body.translation.sentence_trans,
    body.translation.sentence_phrase,
    body.translation.word_etyma
  ])
  const result = (await pool.execute(
    'INSERT INTO translation_record(`create_time`,`article_id`,`origin_statement`,`result`,`user_id`,`from`,`to`,`word`,`index`,`success`,`accent`,`mean_cn`,`mean_en`,`sentence`,`sentence_trans`,`sentence_phrase`,`word_etyma`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      new Date(),
      body.articleId,
      body.originStatement,
      body.result,
      body.userId,
      body.translation.from,
      body.translation.to,
      body.translation.word,
      body.translation.index,
      body.translation.success,
      body.translation.accent,
      body.translation.mean_cn,
      body.translation.mean_en,
      body.translation.sentence,
      body.translation.sentence_trans,
      body.translation.sentence_phrase,
      body.translation.word_etyma
    ],
  )) as unknown as any[]; // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0];
}

export async function query(page: any, userId: any, start: any, end: any) {
  let sql = `SELECT * FROM translation_record WHERE user_id = ? `;
  let paramArr = [userId];
  if (!IsEmpty(start) && !IsEmpty(end)) {
    sql += `AND (create_time between ? AND ?)`;
    paramArr[paramArr.length] = start;
    paramArr[paramArr.length] = end;
  }

  if (!IsEmpty(page)) {
    sql += ` limit ? , ? `;
    paramArr[paramArr.length] = (page.pageNumber - 1) * page.pageSize;
    paramArr[paramArr.length] = page.pageSize * 1;
  }

  const result = (await pool.query(sql, paramArr)) as unknown as any[];

  const arr = [] as any[];

  for(let i =0 ; i < result[0].length ; i ++ ) {
    arr[i] = {};
    arr[i].article_id = result[0][i].article_id;
    arr[i].translation = {};
    
    arr[i].translation.from = result[0][i].from;
    arr[i].translation.to = result[0][i].to;
    arr[i].translation.word = result[0][i].word;
    arr[i].translation.index = result[0][i].index;
    arr[i].translation.success = result[0][i].success;
    arr[i].translation.mean_cn = result[0][i].mean_cn;
    arr[i].translation.mean_en = result[0][i].mean_en;
    arr[i].translation.sentence = result[0][i].sentence;
    arr[i].translation.sentence_trans = result[0][i].sentence_trans;
    arr[i].translation.sentence_phrase = result[0][i].sentence_phrase;
  }

  return arr;
}

export async function countQuery(userId: any, start: any, end: any) {
  let sql = `SELECT * FROM translation_record WHERE user_id = ? `;
  let paramArr = [userId];

  if (!IsEmpty(start) && !IsEmpty(end)) {
    sql += `AND (create_time between ? AND ?)`;
    paramArr[paramArr.length] = start;
    paramArr[paramArr.length] = end;
  }
  sql = `SELECT COUNT(1)'count' FROM  (${sql})AS A  `;
  const result = (await pool.query(sql, paramArr)) as unknown as any[];
  return result[0][0];
}

export async function unStar(from :any , to:any ,articleId:any, userId: any) {
  const result = (await pool.execute(
    `DELETE from translation_record where \`from\` = ? AND \`to\`=? AND article_id = ? AND user_id = ? `,
    [from,to,articleId, userId],
  )) as unknown as any[];
  return result[0];
}

export async function getAllByArticleId(id: any) {
  console.log(id);
  const result = (await pool.execute(
    `SELECT * FROM translation_record where article_id = ? `,
    [id],
  )) as unknown as any[];


  console.log(result[0])

  const arr = [] as any[];

  for(let i =0 ; i < result[0].length ; i ++ ) {
    

    arr[i] = {};
    arr[i].articleId = result[0][i].article_id;
    arr[i].translation = {};
    
    arr[i].translation.from = result[0][i].from;
    arr[i].translation.accent = result[0][i].accent;
    arr[i].translation.to = result[0][i].to;
    arr[i].translation.word = result[0][i].word;
    arr[i].translation.index = result[0][i].index;
    arr[i].translation.success = !!result[0][i].success;
    arr[i].translation.mean_cn = result[0][i].mean_cn;
    arr[i].translation.mean_en = result[0][i].mean_en;
    arr[i].translation.sentence = result[0][i].sentence;
    arr[i].translation.sentence_trans = result[0][i].sentence_trans;
    arr[i].translation.sentence_phrase = result[0][i].sentence_phrase;
  }
  return arr;

}
export async function findOneByAccount(account: string) {
  const result = (await pool.execute(`select * from user where account = ?`, [
    account,
  ])) as unknown as any[];
  return result[0];
}
