import { NextRequest, NextResponse } from 'next/server';

import { success, failed } from '@/shared/models/result';

type BffCallback<T, C> = (request: NextRequest, context: C) => Promise<T>;

export const bffHandler = <T, C>(callback: BffCallback<T, C>) => {
  return async (request: NextRequest, context: C) => {
    try {
      const data = await callback(request, context);
      const result = success(data);

      return NextResponse.json(result, { status: 200 });
    } catch (e) {
      const result = failed(e);

      return NextResponse.json(result, { status: result.statusCode });
    }
  };
};
