import { NextRequest, NextResponse } from 'next/server';

import { success, failed, type Result } from '@/shared/models/result';
import { parseQueryParamOrThrow } from '@/shared/utils/parser/request';
import { setTokenToCookie } from '@/shared/cookie/token';

import fetchLogin from '@/features/auth/apis/server/fetch-login';

export const POST = async (request: NextRequest): Promise<NextResponse<Result<null>>> => {
  try {
    const url = new URL(request.url);
    const email = parseQueryParamOrThrow(url, 'email');

    const loginResponse = await fetchLogin(email);
    const token = loginResponse.token;

    const response = NextResponse.json(success(null), { status: 200 });

    setTokenToCookie(response, token);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
