import { Density } from '../shared.types';

export type FlexTableState = {
  density: Density;
};

export type Props = {
  density: Density;
};

export type FlexTableProviderComponent = React.FC<Props>;
