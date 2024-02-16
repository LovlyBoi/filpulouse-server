import { IsEmpty } from "../util/StringUtils";
import { HTTP_BAD_REQUEST_ERROR } from "../app/errors/httpErrors";
import { queryALLUser, findOneByAccount, insert, isExist } from "./user.dao";
import { HttpError } from "../app/errors/httpErrors";
import { compare, hash } from "../util/bcrypt";
import { BussinessErrors } from "../app/errors/BussinsessErrors";
import { afterEach } from "node:test";

class UserService {
  async getByAccount(id: any) {
    return (await findOneByAccount(id))[0];
  }

  async login(account: any, password: any) {
    const user = await findOneByAccount(account);
    if (IsEmpty(user[0])) {
      throw new HttpError(200, { code: 50002, msg: "账号不存在" });
    }
    const r = await compare(password, user[0].password);
    if (!r) {
      throw new BussinessErrors(50003, "账号密码不正确");
    }
  }

  async register(account: any, password: any) {
    if (await this.isExist(account)) {
      throw new BussinessErrors(50008, "账号已存在");
    }

    const r = await insert(account, await hash(password));
    return r.affectedRows === 1;
  }

  async isExist(account: any) {
    const s = await isExist(account);
    console.log(111, s);
    return s[0]["COUNT(1)"] > 0;
  }
}

export const userService = new UserService();
