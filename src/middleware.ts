import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const route = req.nextUrl.pathname
  if (route == '/um') return NextResponse.redirect(new URL('/texty/ukradli_marii', req.url))
  if (route == '/jb') return NextResponse.redirect(new URL('/texty/jednorožec_blažej', req.url))
  return NextResponse.redirect(new URL('/texty/zahrada', req.url))
}

export const config = {
  matcher: ['/um', '/jb', '/z'],
}
