import {isNull} from "./utils";

export const isNumber = (value: unknown): value is number => typeof value === 'number' && isFinite(value)
const isBigInt = (value: unknown): value is BigInteger => typeof value === 'bigint'

export const toNumber = (value: unknown): number | undefined => {
  if (isNull(value) || isBigInt(value)) {
    return undefined
  }

  const number = Number(value);
  if (isNumber(number)) {
    return number
  }

  return undefined;
};

