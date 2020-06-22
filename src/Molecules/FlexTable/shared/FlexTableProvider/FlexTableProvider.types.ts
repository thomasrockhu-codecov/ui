import { Density } from '../shared.types';

export type FlexTableState = {
  density: Density;
  stickyHeader: boolean;
};

export type Props = {
  density: Density;
  stickyHeader: boolean;
};

export type FlexTableProviderComponent = React.FC<Props>;
