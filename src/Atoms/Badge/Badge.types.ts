import React from 'react';
import { ColorFn } from '../../common/Types/sharedTypes';

export type Props = {
  backgroundColor?: ColorFn;
  color?: ColorFn;
};

export type BadgeComponent = React.FC<Props>;
