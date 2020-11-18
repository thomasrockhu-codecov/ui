import React, { ReactNode } from 'react';
import { FontSize, Density, FlexPropsType } from '../shared/shared.types';
import { TextWrapperComponent } from '../Row/components/ExpandItems/ExpandItems.types';

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

export type TextWrapperProps = {
  /**
   * Set font size
   * @default 'm'
   */
  fontSize?: FontSize;
  /**
   * Truncate the text inside and a tooltip on hover when truncated
   * @default true
   */
  truncate?: boolean;
};

export type CellComponents = { TextWrapper: TextWrapperComponent };

export type CellComponent = React.FC<Props & TextWrapperProps> & CellComponents;

export type InnerCellComponent = React.FC<Props & TextWrapperProps & { flexProps: FlexPropsType }>;

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
