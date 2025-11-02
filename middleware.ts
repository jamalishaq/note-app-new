import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('isLoggedIn');

    if (isLoggedIn?.value === 'true') {
        return NextResponse.redirect(new URL('/notes', request.url));
    } else {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: '/',
};
