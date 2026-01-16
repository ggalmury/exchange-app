export const toNumber = (value: unknown) => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  if (typeof value === 'string') {
    const normalizedValue = value.replace(/[^0-9]/g, '');
    const numericValue = Number(normalizedValue);

    return Number.isFinite(numericValue) ? numericValue : 0;
  }

  return 0;
};
