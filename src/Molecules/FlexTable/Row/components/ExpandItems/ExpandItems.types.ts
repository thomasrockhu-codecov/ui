import React, { ReactNode } from 'react';
import { FontSize, MediaRelatedProps } from '../../../shared/shared.types';
import { ColorFn } from '../../../../../common/Types/sharedTypes';

type RenderPropArguments = { fontSize: FontSize };
export type RenderFunc = (props: RenderPropArguments) => ReactNode;

export type ExpandItemProps = {
  label: ReactNode | RenderFunc;
  value: ReactNode | RenderFunc;
  hidden?: boolean;
} & MediaRelatedProps<{ hidden?: boolean }>;

export type ExpandItems = Array<ExpandItemProps>;

type Items = {
  TextWrapperLabel: React.FC<{ fontSize: FontSize }>;
  TextWrapperValue: React.FC<{ fontSize: FontSize }>;
};

export type ExpandItemComponent = React.FC<{ item: ExpandItemProps; mobileItem?: boolean }> & Items;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;

export type ExpandItemMediaConfigurableProps = {
  fontSize: FontSize;
  hidden?: boolean;
} & MediaRelatedProps<{ fontSize: FontSize; hidden?: boolean }>;

type TextProps = { fontSize: FontSize; color?: ColorFn } & MediaRelatedProps<{
  fontSize: FontSize;
}>;

export type TextComponent = React.FC<TextProps>;

export type TextWrapperComponent = React.FC<TextProps & { truncate?: boolean }>;
