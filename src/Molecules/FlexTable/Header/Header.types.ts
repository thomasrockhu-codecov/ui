import React, { ReactNode } from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';
import {
  SortOrder,
  SortButtonProps,
  TextWrapperComponent,
  TextWrapperProps,
  SortIconComponent,
  SortButtonComponent,
  SortIconProps,
} from './HeaderContent/HeaderContent.types';

export type OnSort = (columnId: string, newSortOrder: SortOrder) => void;

type Unsortable = {
  /**
   * Add sortable arrow and button
   */
  sortable?: false;
  /**
   * Sets a controlled sort state, sort states can be found under FlexTable.CONSTANTS
   */
  sortOrder?: undefined;
  /**
   * Sets the initial sort state for uncontrolled sorting
   */
  initialSortOrder?: undefined;
  onSort?: undefined;
};

interface Sortable {
  sortable: true;
  onSort?: OnSort;
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

type RenderPropArguments = TextWrapperProps &
  SortIconProps &
  SortButtonProps & { onSortClick: () => void; sorted: boolean; sortable: boolean };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

type Props = {
  children?: Children;
  /**
   * Set column id, used to share layout between header and cells in the column
   */
  columnId: string;
} & FlexboxProps &
  SortedProps;

export type HeaderComponents = {
  /**
   * Wraps text in correct font size with truncation and tooltip
   */
  TextWrapper: TextWrapperComponent;
  SortIcon: SortIconComponent;
  /**
   * Wraps the header with an accessible button so it's clickable anywhere to sort
   */
  SortButton: SortButtonComponent;
};

export type HeaderComponent = React.FC<Props> & HeaderComponents;
