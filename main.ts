import app from "./src/app";

const port = process.env.APP_PORT || 9816

app.listen(port, () => {
  console.log(`🚀 服务启动于 ${port} 端口..`)
});
