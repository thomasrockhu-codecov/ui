export type Density = 's' | 'm' | 'l';

export type TextWrapperProps = {
  fontSize?: 'm' | 'l';
  density?: Density;
  sorted?: boolean;
};

type onSortClick = () => void;

export type UIProps = { onSortClick: onSortClick };

export type SortOrder = 'ascending' | 'descending' | 'none' | null;

export type Props = { sortable: boolean; sortOrder: SortOrder } & TextWrapperProps;
