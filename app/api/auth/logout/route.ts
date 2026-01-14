import { NextResponse } from 'next/server';

import { deleteTokenFromCookie } from '@/shared/cookie/token';
import { success, failed, type Result } from '@/shared/models/result';

export const POST = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const response = NextResponse.json(success(null), { status: 200 });

    deleteTokenFromCookie(response);

    return response;
  } catch (e) {
    const result = failed(e);

    return NextResponse.json(result, { status: result.statusCode });
  }
};
