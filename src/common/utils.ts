import * as R from 'ramda';
import React from 'react';
import { Theme } from '../theme/theme.types';

export const assert = (
  expression: boolean,
  errorMessage: string,
  options?: { level?: 'warn' },
): true => {
  if (process.env.NODE_ENV !== 'production') {
    if (!expression) {
      if (options && options.level === 'warn') {
        // eslint-disable-next-line no-console
        console.warn(errorMessage);
      } else {
        throw new Error(errorMessage);
      }
    }
  }
  // For chaining with &&
  return true;
};

export const deprecate = (message: string) => <T extends {} | Function>(target: T): T => {
  if (process.env.NODE_ENV !== 'production') {
    return typeof Proxy === 'undefined'
      ? target
      : new Proxy(target, {
          get(getTarget, getProp) {
            console.warn(`Deprecated: ${message}`);
            return getTarget[getProp];
          },
          apply(applyTarget, thisArg, argumentsList) {
            // @ts-ignore
            return applyTarget.apply(thisArg, argumentsList);
          },
        });
  }
  return target;
};

export const isUndefined = (x: any): x is undefined => typeof x === 'undefined';
export const isElement = (x: any): x is React.ReactNode => React.isValidElement(x);
export const isNumber = (x: any): x is number => typeof x === 'number' && !Number.isNaN(x);
export const isString = (x: any): x is string => typeof x === 'string';
export const isBoolean = (x: any): x is boolean => typeof x === 'boolean';
export const isArray = (x: any): x is [] => Array.isArray(x);
export const isFunction = (x: any): x is Function => typeof x === 'function';
export const isHTMLElement = (x: any): x is HTMLElement => x instanceof HTMLElement;

export const pickAriaAttributes = R.pickBy((_, key: string) => R.test(/^aria-/, key));

const convertToDate = (value: number) => new Date(value);
const isInvalid = R.anyPass([R.isNil, R.pipe(convertToDate, R.toString, R.equals('Invalid Date'))]);

export const isValidDateTimeNumber = R.complement(isInvalid) as (x: any) => x is number;

export const getValueFromNumberOrString = (value: number | string, theme: Theme) => {
  if (value && theme) {
    return `${isNumber(value) ? `${theme.spacing.unit(value)}px` : value}`;
  }

  return null;
};

type NumberWithLimit = (amount: number, limit: number) => string;
export const numberWithLimit: NumberWithLimit = (amount, limit) => {
  const isOverLimit = amount > limit;
  return isOverLimit ? `${limit}+` : `${amount}`;
};
