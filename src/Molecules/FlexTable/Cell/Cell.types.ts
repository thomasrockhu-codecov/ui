import React, { ReactNode } from 'react';
import { FontSize, Density, MediaRelatedProps } from '../shared/shared.types';
import { FlexPropsType } from '../shared/ColumnProvider/ColumnProvider.types';
import { FlexProps } from '../../../Atoms/Flexbox/Flexbox.types';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  className?: string;
  /**
   * Define which column which cell it belongs to and sets the column layout defined in the `Header`
   */
  columnId: string;
} & MediaRelatedProps<FlexProps> &
  FlexProps;

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

export type TextWrapperComponent = React.FC<TextWrapperProps>;

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

export type ExpandCellComponent = React.FC<ExpandCellProps & FlexProps>;
