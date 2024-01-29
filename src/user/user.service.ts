import { HTTP_BAD_REQUEST_ERROR } from "../app/errors/httpErrors";
import {queryALLUser,findOneByAccount} from "./user.dao"
class CatService {
  cats = [
    {
      id: "1",
      name: "Cat1",
      age: 3,
    },
    {
      id: "2",
      name: "Cat2",
      age: 2,
    },
    {
      id: "3",
      name: "Cat3",
      age: 1,
    },
  ];

  getAllCats() {
    // 如果有错，也可以直接在service层抛出去
    // throw HTTP_BAD_REQUEST_ERROR;
    return this.cats;
  }

  getCatById(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }
}

export const catService = new CatService();
