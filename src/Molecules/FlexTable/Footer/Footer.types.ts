import React, { ReactNode } from 'react';
import { FontSize, Density, FlexPropsType } from '../shared/shared.types';

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
   * Set font weight
   * @default 'bold'
   */
  weight?: string;
  truncate?: boolean;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type FooterComponent = React.FC<Props> & { TextWrapper: TextWrapperComponent };
