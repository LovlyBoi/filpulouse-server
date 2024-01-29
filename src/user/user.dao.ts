import { pool } from "@/app/database"






export async function queryALLUser(id: string) {
  // 通过第二个参数传入sql的参数
  const result = pool.execute(`select * from blogs where id = ?`, [id]) as unknown as any[] // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0]
}


export async function findOneByAccount(account:string) {
  return (pool.execute(`SELECT * FROM USER WHERE account = ?`,[account]) as unknown as any[]) [0]
}
