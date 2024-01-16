## 1. 安装依赖

使用 yarn 进行安装

```shell
$ yarn
```

## 2. 配置环境变量

根目录下有 .env 和 .env.local 文件（后者不会上传到 git 上，需要自己创建）。local 文件优先级更高，会覆盖 .env 文件中的环境变量。

环境变量会被注入到 process.env.xxx 中。

启动前需要配置好数据库名和数据库密码，建议密码放在 local 文件中。

## 3. 启动

执行 dev 命令启动：

```shell
$ yarn dev
```

## 文档

Koa 文档：[Koa](https://koa.bootcss.com/).

Node 文档（Node 可以进行系统调用，对 node api 不熟悉就查这个）：[Node](https://nodejs.org/docs/latest/api/).

mysql2 文档：[mysql2](https://www.npmjs.com/package/mysql2).