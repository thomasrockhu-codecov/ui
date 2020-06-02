import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type UpdateContextProps = {
  setColumnProps?: (name: string, props: FlexboxProps) => void;
};

export type ColumnProps = {
  [key: string]: FlexboxProps;
};
