import React, { ReactNode } from 'react';
import { FontSize, MediaRelatedProps } from '../../../shared/shared.types';

type RenderPropArguments = { fontSize: FontSize };
export type RenderFunc = (props: RenderPropArguments) => ReactNode;

type TextWrapperProps = {
  /**
   * Truncate the text inside and a tooltip on hover when truncated
   * @default true
   */
  truncate?: boolean;
  isLabel: boolean;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type ExpandItemProps = {
  label: ReactNode | RenderFunc;
  value: ReactNode | RenderFunc;
  hidden?: boolean;
} & MediaRelatedProps<{ hidden?: boolean }>;

export type ExpandItems = Array<ExpandItemProps>;

type Items = {
  TextWrapper: TextWrapperComponent;
};

export type ExpandItemComponent = React.FC<{ item: ExpandItemProps; mobileItem?: boolean }> & Items;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;

export type ExpandItemMediaConfigurableProps = {
  hidden?: boolean;
} & MediaRelatedProps<{ hidden?: boolean }>;
