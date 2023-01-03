import { Optional } from "./types";

export const head = <T>(array: T[]): Optional<T> => array[0];
export const tail = <T>(array: T[]): Optional<T> => array[array.length - 1]
