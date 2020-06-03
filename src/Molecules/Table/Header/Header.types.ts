import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Props = {
  fontSize?: 'm' | 'l';
} & FlexboxProps;

export type HeaderComponent = React.FC<Props>;
