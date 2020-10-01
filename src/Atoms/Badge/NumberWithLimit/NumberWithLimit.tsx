import React from 'react';
import { NumberWithLimitComponent } from './NumberWithLimit.types';
import { numberWithLimit } from '../../../common/utils';

export const NumberWithLimit: NumberWithLimitComponent = ({ amount, limit }) => {
  return <>{numberWithLimit(amount, limit)}</>;
};
