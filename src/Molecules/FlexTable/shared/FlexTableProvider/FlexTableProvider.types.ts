import { Density, FontSize, MediaRelatedProps } from '../shared.types';

export type FlexTableState = {
  /**
   * Set vertical padding for rows.
   * @default 'm'
   */
  density: Density;
  /**
   * Padding horizontally between cells
   * @default 2
   */
  columnDistance: number;
  /**
   * Set if header is fixed or follows scroll.
   * @default true
   */
  stickyHeader: boolean;
  /**
   * Set font size for the table
   * @default 'm'
   */
  fontSize: FontSize;
  /**
   * Set table expandability. Adds empty `Header` for `HeaderRow` and chevrons for that column. Adds empty `Footer` if table contains `FooterRow`.
   * @default false
   */
  expandable: boolean;
};

export type Props = MediaRelatedProps<FlexTableState> & FlexTableState;

export type FlexTableContextProps = Props | undefined;

export type FlexTableProviderComponent = React.FC<Props>;
