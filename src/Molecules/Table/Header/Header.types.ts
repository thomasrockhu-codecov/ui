import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Density = 's' | 'm' | 'l';

export type Props = {
  fontSize?: 'm' | 'l';
  density?: Density;
} & FlexboxProps;

export type HeaderComponent = React.FC<Props>;
