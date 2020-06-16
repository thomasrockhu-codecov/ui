import React, { ReactNode } from 'react';
import { FontSize, Density } from '../shared/shared.types';
import { FlexPropsType } from '../shared/ColumnProvider/ColumnProvider.types';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  className?: string;
  fontSize?: FontSize;
  columnId: string;
};

export type CellComponent = React.FC<Props>;

export type InnerCellComponent = React.FC<{ flexProps: FlexPropsType } & Props>;

export type TextWrapperProps = {
  fontSize?: FontSize;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

type ExpandCellProps = {
  disabled?: boolean;
  expanded: boolean;
  onClick: () => void;
};

export type ExpandCellComponent = React.FC<ExpandCellProps>;
