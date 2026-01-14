export const toNumber = (value: unknown) => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  if (typeof value === 'string') {
    const onlyDigits = value.replace(/[^0-9]/g, '');
    const n = Number(onlyDigits);

    return Number.isFinite(n) ? n : 0;
  }

  return 0;
};
