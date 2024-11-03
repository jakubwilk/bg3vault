import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from 'i18n/routing'

const intlMiddlewre = createMiddleware(routing)

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth')?.value
  const uid = request.cookies.get('uid')?.value

  const hasTokenAndUid = token && uid
  const intlResponse = intlMiddlewre(request)

  if (intlResponse) {
    return intlResponse
  }

  if (hasTokenAndUid) {
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/register')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
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
