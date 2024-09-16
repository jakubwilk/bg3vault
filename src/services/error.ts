import { NextResponse } from 'next/server'

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

  throwBadRequest(message: string): NextResponse {
    return NextResponse.json(message, { status: HttpStatus.BAD_REQUEST })
  }

  throwNotAutorization(message: string): NextResponse {
    return NextResponse.json(message, { status: HttpStatus.NOT_AUTHORIZATION })
  }

  throwForbidden(message: string): NextResponse {
    return NextResponse.json(message, { status: HttpStatus.FORBIDDEN })
  }

  throwNotFound(message: string): NextResponse {
    return NextResponse.json(message, { status: HttpStatus.NOT_FOUND })
  }

  throwServerError(message: string): NextResponse {
    return NextResponse.json(message, { status: HttpStatus.SERVER_ERROR })
  }
}

const HttpException = new HttpError()

export default HttpException
