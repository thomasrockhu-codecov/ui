import React from 'react';

type RenderFunc = (collapsed: boolean) => React.ReactNode;

export type CollapsibleProps = {
  className?: string;
  title: React.ReactNode;
  collapsedInitial?: boolean;
  heading?: 'h1' | 'h2' | 'h3';
  noIndicator?: boolean;
  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
  expandElement?: React.ReactNode | RenderFunc;
  titleRowPaddingY?: number;
  titleRowPaddingX?: number;
};

export type IndicatorsProps = {
  $noIndicator: boolean;
  $collapsed: boolean;
  $py: number;
  $px: number;
};
