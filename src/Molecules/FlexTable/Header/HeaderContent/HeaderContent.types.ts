import React from 'react';
import { FontSize } from '../../shared/shared.types';

export type TextWrapperProps = {
  /**
   * Set font size
   * @default 'm'
   */
  fontSize?: FontSize;
  /**
   * Set TextWrapper font weight to bold
   * @default false
   */
  sorted?: boolean;
  truncate?: boolean;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type SortOrder = 'ascending' | 'descending' | 'none' | null;

export type SortIconProps = {
  /**
   * Sets a controlled sort state, sort states can be found under FlexTable.CONSTANTS or in types.
   */
  sortOrder: NonNullable<SortOrder>;
};

export type SortIconComponent = React.FC<SortIconProps>;

export type SortButtonProps = {
  onClick: () => void;
  children: React.ReactChild | React.ReactChild[];
};

export type SortButtonComponent = React.FC<SortButtonProps>;

type onSortClick = () => void;

export type UIProps = { onSortClick: onSortClick };

export type Props = { sortable: boolean; sortOrder: SortOrder; sorted: boolean };
