import React, { ReactNode } from 'react';
import { FontSize, Density, FlexPropsType } from '../shared/shared.types';
import { TextWrapper } from './TextWrapper';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  /**
   * Define which column which cell it belongs to and sets the column layout defined in the `Header`
   */
  columnId: string;
} & FlexPropsType;

export type CellComponents = { TextWrapper: typeof TextWrapper };

export type CellComponent = React.FC<Props & React.ComponentProps<typeof TextWrapper>> &
  CellComponents;

type ExpandCellProps = {
  /**
   * Disable chevron
   */
  disabled?: boolean;
  /**
   * State for chevron direction
   */
  expanded: boolean;
  onClick: () => void;
  /**
   * Defined by `Header` to get correct column layout. Set by the constant ICON_COLUMN_DEFAULT_FLEX_PROPS
   */
  columnId: string;
};

export type ExpandCellComponent = React.FC<ExpandCellProps & FlexPropsType>;
