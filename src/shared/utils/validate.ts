export const isEmptyString = (value: string | null): boolean => {
  return !value || value.trim() === '' ? true : false;
};
