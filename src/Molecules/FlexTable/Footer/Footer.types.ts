import React, { ReactNode } from 'react';
import { FontSize, Density } from '../shared/shared.types';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  className?: string;
  fontSize?: FontSize;
  /**
   * Define which column which cell it belongs to and sets the column layout defined in the `Header`
   */
  columnId: string;
};

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
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type FooterComponent = React.FC<Props> & { TextWrapper: TextWrapperComponent };
