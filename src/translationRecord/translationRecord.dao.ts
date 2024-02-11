import { IsEmpty } from "../util/StringUtils";
import { pool } from "../app/database"



export async function insert(body: any) {
  const result = await pool.execute(
    `INSERT INTO translation_record(create_time,article_id,origin_statement,result,user_id) values (?,?,?,?,?)`,
    [new Date(),body.articleId,body.originStatement,body.result,body.userId]) as unknown as any[] // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0]
}



export async function query(page:any,userId:any,start:any ,end :any) {
  let sql = `SELECT * FROM translation_record WHERE user_id = ? `;
  let paramArr = [userId];
  if(!IsEmpty(start) &&  !IsEmpty(end)){
    sql +=  `AND (create_time between ? AND ?)`
    paramArr[paramArr.length] = start;
    paramArr[paramArr.length] = end;
  }

  if (!IsEmpty(page)){
    sql += ` limit ? , ? `
    paramArr[paramArr.length] = (page.pageNumber-1)*page.pageSize;
    paramArr[paramArr.length] = page.pageSize *1;

  }
  console.log(sql,paramArr)
  const result = await pool.query(sql,paramArr) as unknown as any[]
  return result[0]
}




export async function countQuery(userId:any,start:any ,end :any) {
  let sql = `SELECT * FROM translation_record WHERE user_id = ? `;
  let paramArr = [userId];

  if(!IsEmpty(start) &&  !IsEmpty(end)){
    sql +=  `AND (create_time between ? AND ?)`
    paramArr[paramArr.length] = start;
    paramArr[paramArr.length] = end;
  }
  sql = `SELECT COUNT(1)'count' FROM  (${sql})AS A  `
  const result = await pool.query(sql,paramArr) as unknown as any[]
  return result[0][0]
}




export async function findOneByAccount(account:string) {
  const result = await pool.execute(`select * from user where account = ?`, [account]) as unknown as any[];
  return result[0];
}
