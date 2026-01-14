const ORDER_QUERY_KEYS = {
  MY: ['order', 'my'],
  QUOTE: (fromCurrency: string, toCurrency: string, forexAmount: number) => [
    'order',
    'quote',
    `${fromCurrency}-${toCurrency}-${forexAmount}`,
  ],
} as const;

export default ORDER_QUERY_KEYS;
