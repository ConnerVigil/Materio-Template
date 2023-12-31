import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Verify if there is an authenticated Supabase user
 * Validate if the user is authenticated and currently on the sign-in page, redirecting them to the account page
 * Verify if the user is not authenticated and currently on the account page, redirecting them to the sign-in page.
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user }
  } = await supabase.auth.getUser()

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/account', req.url).toString()) // Added toString() to fix type error
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url).toString()) // Added toString() to fix type error
  }

  return res
}

export const config = {
  matcher: ['/', '/account']
}
