import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
  sorted?: boolean;
};

export type SortOrder = 'ascending' | 'descending' | undefined;

type Unsortable = {
  sortable?: false;
  sortOrder?: undefined;
};
type Sortable = {
  sortable: true;
  sortOrder?: SortOrder;
};

type SortedProps = Sortable | Unsortable;

export type Props = {} & FlexboxProps & TextWrapperProps & SortedProps;

export type HeaderComponent = React.FC<Props>;
