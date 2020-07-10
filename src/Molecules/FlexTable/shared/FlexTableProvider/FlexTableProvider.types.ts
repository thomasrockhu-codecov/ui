import { Density, FontSize, MediaRelatedProps } from '../shared.types';

type FlexTableState = {
  /**
   * Provides vertical padding for rows.
   * @default 'm'
   */
  density: Density;
  /**
   * Boolean to set if header is fixed or follows scroll.
   * @default true
   */
  stickyHeader: boolean;
  /**
   * Font size for the table
   * @default 'm'
   */
  fontSize: FontSize;
  /**
   * Sets table expandability. Adds empty `Header` for `HeaderRow` and chevrons for that column. Adds empty `Footer` if table contains `FooterRow`.
   * @default false
   */
  expandable: boolean;
};

export type Props = MediaRelatedProps<FlexTableState> & FlexTableState;

export type FlexTableContextProps = Props | undefined;

export type FlexTableProviderComponent = React.FC<Props>;
