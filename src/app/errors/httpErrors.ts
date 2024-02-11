export class HttpError {
  constructor(
    public code: number,
    public msg: any
  ) {}
}

export const HTTP_NOT_FOUND_ERROR = new HttpError(404, "Not Found");
export const HTTP_INTERNAL_SERVER_ERROR = new HttpError(
  500,
  "Internal Server Error"
);
export const HTTP_I_AM_A_TEAPOT_ERROR = new HttpError(418, "I'm a teapot");
export const HTTP_BAD_REQUEST_ERROR = new HttpError(400, "Bad Request");
export const HTTP_UNAUTHORIZED_ERROR = new HttpError(401, "Unauthorized");
export const HTTP_FORBIDDEN_ERROR = new HttpError(403, "Forbidden");
export const HTTP_NOT_ACCEPTABLE_ERROR = new HttpError(406, "Not Acceptable");
