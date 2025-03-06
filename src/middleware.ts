// src/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Uppdatera supabase auth-sessionen
  await supabase.auth.getSession()

  // Skyddade rutter
  const isAuthRoute = req.nextUrl.pathname.startsWith('/dashboard')
  
  if (isAuthRoute) {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Omdirigera till login om användaren inte är inloggad
    if (!session) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/login'
      redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return res
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/publish',
    '/register-freelancer',
    '/auth/callback'
  ],
}