import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
};

export type SortOrder = 'ascending' | 'descending' | undefined;

export type Props = {
  sortable?: boolean;
  sortOrder?: SortOrder;
} & FlexboxProps &
  TextWrapperProps;

export type HeaderComponent = React.FC<Props>;
