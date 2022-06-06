export const isNumber = (value: unknown): value is number => typeof value === 'number' && isFinite(value) && !isNaN(value);
export const toNumber = (value: unknown): number | undefined => {
  const number = Number(value);
  return isNumber(number) ? number : undefined;
};
