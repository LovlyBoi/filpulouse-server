import mysql from "mysql2";
import type { Pool } from "mysql2";

function parsePort(port: string | undefined): number | undefined {
  return port == null
    ? undefined
    : Number.isNaN(parseInt(port))
      ? undefined
      : parseInt(port);
}

let mainConnections: Pool | null = null;

try {
  console.log("################### createPool....");
  mainConnections = mysql.createPool({
    database: "lvsiying",
    user: "root",
    password: "zxc,./123",
    host: "127.0.0.1",
    port: parsePort("3306"),
  });
  console.log(`🔗 连接数据库 \`${process.env.DB_NAME}\` ...`);
} catch (e) {
  console.log(`❌ 数据库 \`${process.env.DB_NAME}\` 连接失败`);
}

export const pool = mainConnections!.promise();
