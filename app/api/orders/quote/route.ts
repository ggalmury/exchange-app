import { NextRequest } from 'next/server';

import { createBffHandler } from '@/shared/utils/bff';
import { parseQueryParamOrThrow } from '@/shared/utils/parser/request';
import { getTokenFromCookieOrThrow } from '@/shared/cookie/token';

import fetchQuote from '@/features/order/apis/server/fetch-quote';
import type { Quote } from '@/features/order/models/quote';

const quoteHandler = async (request: NextRequest): Promise<Quote> => {
  const storedToken = await getTokenFromCookieOrThrow();

  const url = new URL(request.url);
  const fromCurrency = parseQueryParamOrThrow(url, 'fromCurrency');
  const toCurrency = parseQueryParamOrThrow(url, 'toCurrency');
  const forexAmount = parseQueryParamOrThrow(url, 'forexAmount');

  return await fetchQuote(fromCurrency, toCurrency, forexAmount, storedToken);
};

export const GET = createBffHandler(quoteHandler);
