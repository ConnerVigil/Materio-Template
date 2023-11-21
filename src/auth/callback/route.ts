import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

/**
 * As we are employing Proof Key for Code Exchange (PKCE) in our authentication flow, it
 * is necessary to create a route handler responsible for exchanging the code for a session.
 *
 * In the following code snippet, we perform the following steps:
 * Retrieve the code sent back from the Supabase Auth server using the code query parameter.
 * Exchange this code for a session, which we store in our chosen storage mechanism (in this case, cookies).
 * Finally, we redirect the user to the account page.
 */
export async function GET(req: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('/account', req.url).toString()) // Added toString() to fix type error
}
