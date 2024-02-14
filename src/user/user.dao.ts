import { pool } from "../app/database";

export async function queryALLUser(id: string) {
  // 通过第二个参数传入sql的参数
  const result = (await pool.execute(`select * from blogs where id = ?`, [
    id,
  ])) as unknown as any[]; // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0];
}

export async function insert(account: any, password: any) {
  const result = (await pool.execute(
    `INSERT INTO user(account,password,create_time,enable)values (?,?,?,?)`,
    [account, password, new Date(), 1],
  )) as unknown as any[]; // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0];
}

export async function findOneByAccount(account: string) {
  const result = (await pool.execute(`select * from user where account = ?`, [
    account,
  ])) as unknown as any[];
  return result[0];
}

export async function isExist(account: any) {
  const result = (await pool.execute(
    `select COUNT(1) from user where account = ?`,
    [account],
  )) as unknown as any[];
  return result[0];
}
