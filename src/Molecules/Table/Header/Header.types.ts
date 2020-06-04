import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
  sorted?: boolean;
};

export type SortStates = 'ascending' | 'descending' | null;
export type onSort = (sortOrder: SortStates) => void;

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
  sortOrder: SortStates;
  defaultSortOrder?: undefined;
}

interface UncontrolledSort extends Sortable {
  sortOrder?: undefined;
  defaultSortOrder?: SortStates;
}

type SortedProps = ControlledSort | UncontrolledSort | Unsortable;

export type Props = {} & FlexboxProps & TextWrapperProps & SortedProps;

export type HeaderComponent = React.FC<Props>;
