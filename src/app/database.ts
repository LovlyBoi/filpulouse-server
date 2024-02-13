import mysql from "mysql2";
import type { Pool } from "mysql2";
import "./loadEnv";

function parsePort(port: string | undefined): number | undefined {
  return port == null
    ? undefined
    : Number.isNaN(parseInt(port))
      ? undefined
      : parseInt(port);
}

let mainConnections: Pool | null = null;

try {
  mainConnections = mysql.createPool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: parsePort(process.env.DB_PORT),
  });
  console.log(`🔗 连接数据库 \`${process.env.DB_NAME}\` ...`);
} catch (e) {
  console.log(`❌ 数据库 \`${process.env.DB_NAME}\` 连接失败`);
}

export const pool = mainConnections!.promise();
