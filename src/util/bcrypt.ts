import bcrypt = require('bcryptjs');

export function hash(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return reject(err);
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  });
}

export function match(origin:string ,password:string):Boolean{
  let r = hash(password).then((val)=>{
    return val;
  })

  return String.apply(r)==origin;
}

export const compare = bcrypt.compare;