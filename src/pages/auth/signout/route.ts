import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session) {
    await supabase.auth.signOut()
  }

  return NextResponse.redirect(new URL('/', req.url).toString(), 302) // Added toString() to fix type error, and changed to number insead of { status: 302 }
}
