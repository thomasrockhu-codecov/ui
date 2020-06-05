import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
  sorted?: boolean;
};

export type SortOrder = 'ascending' | 'descending' | 'none';
export type onSort = (sortOrder: SortOrder) => void;

type Unsortable = {
  sortable?: false;
  sortOrder?: undefined;
  defaultSortOrder?: undefined;
  onSort?: undefined;
};

interface Sortable {
  sortable: true;
  onSort?: onSort;
}

interface ControlledSort extends Sortable {
  sortOrder: SortOrder;
  defaultSortOrder?: undefined;
}

interface UncontrolledSort extends Sortable {
  sortOrder?: undefined;
  defaultSortOrder?: SortOrder;
}

type SortedProps = ControlledSort | UncontrolledSort | Unsortable;

export type Props = {} & FlexboxProps & TextWrapperProps & SortedProps;

export type HeaderComponent = React.FC<Props>;
