import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';
import { SortOrder, TextWrapperProps } from './HeaderContent/HeaderContent.types';

export type onSort = (newSortOrder: SortOrder, columnId: string) => void;

type Unsortable = {
  sortable?: false;
  sortOrder?: undefined;
  initialSortOrder?: undefined;
  onSort?: undefined;
};

interface Sortable {
  sortable: true;
  onSort?: onSort;
}

interface ControlledSort extends Sortable {
  sortOrder: SortOrder;
  initialSortOrder?: undefined;
}

interface UncontrolledSort extends Sortable {
  sortOrder?: undefined;
  initialSortOrder?: SortOrder;
}

type SortedProps = ControlledSort | UncontrolledSort | Unsortable;

export type Props = { columnId: string } & FlexboxProps & TextWrapperProps & SortedProps;

export type HeaderComponent = React.FC<Props>;
