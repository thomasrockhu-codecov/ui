import React, { ReactNode } from 'react';
import { FontSize, Density } from '../shared/shared.types';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children: Children;
  className: string;
  density: Density;
  fontSize: FontSize;
  columnId: string;
};

export type CellComponent = React.FC<Props>;

export type TextWrapperProps = {
  fontSize?: FontSize;
  density?: Density;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;
