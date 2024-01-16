import { pool } from "@/app/database"

// 使用 ? 来完成预编译sql
const SOME_SQL = `
  select * from blogs where id = ?;
`

export async function queryALLBlogs(id: string) {
  // 通过第二个参数传入sql的参数
  const result = pool.execute(SOME_SQL, [id]) as unknown as any[] // 懒得写类型，就给他强制转为any。如果你想写实体类也行
  return result[0]
}
