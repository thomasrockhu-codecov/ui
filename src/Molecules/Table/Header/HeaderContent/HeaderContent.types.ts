import React from 'react';

export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
  sorted?: boolean;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type SortOrder = 'ascending' | 'descending' | 'none' | null;

export type SortIconProps = {
  sortOrder: NonNullable<SortOrder>;
};

export type SortIconComponent = React.FC<SortButtonProps>;

export type SortButtonProps = {
  onClick: () => void;
};

export type SortButtonComponent = React.FC<SortButtonProps>;

type onSortClick = () => void;

export type UIProps = { onSortClick: onSortClick };

export type Props = { sortable: boolean; sortOrder: SortOrder; sorted: boolean } & TextWrapperProps;
