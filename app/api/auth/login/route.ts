import { NextRequest, NextResponse } from 'next/server';

import { parseJsonOrThrow } from '@/shared/utils/parser/request';
import { setTokenToCookie } from '@/shared/cookie/token';
import { success, failed, type Result } from '@/shared/models/result';

import fetchLogin from '@/features/auth/apis/server/fetch-login';
import type { LoginRequest } from '@/features/auth/models/login-request';

export const POST = async (request: NextRequest): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody = await parseJsonOrThrow<LoginRequest>(request);

    const loginResponse = await fetchLogin(requestBody);
    const token = loginResponse.token;

    const response = NextResponse.json(success(null), { status: 200 });

    setTokenToCookie(response, token);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
