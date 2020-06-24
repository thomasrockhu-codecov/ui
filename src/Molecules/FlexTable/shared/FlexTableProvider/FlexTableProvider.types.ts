import { Density, FontSize } from '../shared.types';

export type FlexTableState = {
  density?: Density;
  stickyHeader: boolean;
  fontSize?: FontSize;
};

export type Props = {} & FlexTableState;

export type FlexTableProviderComponent = React.FC<Props>;
