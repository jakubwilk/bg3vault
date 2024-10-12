export interface IHttpException {
  status: number
  message: string
}

export const HttpStatus = {
  OK: 200,
  CREATE: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_AUTHORIZATION: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}

export class HttpError {
  constructor() {}

  throwBadRequest(message: string) {
    return { status: HttpStatus.BAD_REQUEST, message }
  }

  throwNotAutorization(message: string) {
    return { status: HttpStatus.NOT_AUTHORIZATION, message }
  }

  throwForbidden(message: string) {
    return { status: HttpStatus.FORBIDDEN, message }
  }

  throwNotFound(message: string) {
    return { status: HttpStatus.NOT_FOUND, message }
  }

  throwServerError(message: string) {
    return { status: HttpStatus.SERVER_ERROR, message }
  }
}

const HttpException = new HttpError()

export default HttpException
