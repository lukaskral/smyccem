import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const route = req.nextUrl.pathname
  if (route == '/ukradli_marii') return NextResponse.redirect(new URL('/texty/ukradli_marii', req.url))
  if (route == '/jednorozec_blazej') return NextResponse.redirect(new URL('/texty/jednorožec_blažej', req.url))
  return NextResponse.redirect(new URL('/texty/zahrada', req.url))
}

export const config = {
  matcher: ['/ukradli_marii', '/jednorozec_blazej', '/zahrada'],
}
