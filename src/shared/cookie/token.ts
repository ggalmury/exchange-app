import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import UnauthorizedError from '@/shared/errors/api/unauthorized-error';

const KEY = 'exchange-app:token';

export const getTokenFromCookie = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(KEY);

  return token?.value ?? null;
};

export const getTokenFromCookieOrThrow = async (): Promise<string> => {
  const token = await getTokenFromCookie();
  if (!token) throw new UnauthorizedError();

  return token;
};

export const setTokenToCookie = (response: NextResponse, token: string): void => {
  response.cookies.set({
    name: KEY,
    value: token,
    path: '/api',
    maxAge: 86_400,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
};

export const deleteTokenFromCookie = (response: NextResponse): void => {
  response.cookies.set({
    name: KEY,
    value: '',
    path: '/api',
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
};
