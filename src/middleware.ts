import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n'

const intlMiddlewre = createMiddleware(routing)

export function middleware(request: NextRequest) {
  const intlResponse = intlMiddlewre(request)

  if (intlResponse) {
    return intlResponse
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/(pl|en)/:path*',
    '/((?!api|_next/static|assets|_next/image|favicon.ico|globals.css).*)',
  ],
}
