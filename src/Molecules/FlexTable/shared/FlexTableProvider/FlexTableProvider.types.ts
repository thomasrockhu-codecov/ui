import { Density, FontSize, MediaRelatedProps } from '../shared.types';

type FlexTableState = {
  density: Density;
  stickyHeader: boolean;
  fontSize: FontSize;
  expandable: boolean;
};

export type Props = MediaRelatedProps<FlexTableState> & FlexTableState;

export type FlexTableContextProps = Props | undefined;

export type FlexTableProviderComponent = React.FC<Props>;
