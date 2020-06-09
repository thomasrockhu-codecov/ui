export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
  sorted?: boolean;
};

export type SortOrder = 'ascending' | 'descending' | 'none' | null;

export type SortIconProps = {
  sortOrder: NonNullable<SortOrder>;
};

export type SortButtonProps = {
  onClick: () => void;
};

type onSortClick = () => void;

export type UIProps = { onSortClick: onSortClick };

export type Props = { sortable: boolean; sortOrder: SortOrder; sorted: boolean } & TextWrapperProps;
