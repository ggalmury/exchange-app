export const currencyTranslate: Record<string, string> = {
  KRW: '원화',
  USD: '달러',
  JPY: '엔화',
} as const;

export const currencyTranslateWithCountry: Record<string, string> = {
  KRW: '한국 원화',
  USD: '미국 달러',
  JPY: '일본 엔화',
} as const;

export const currencySymbol: Record<string, string> = {
  KRW: '₩',
  USD: '$',
  JPY: '¥',
} as const;
