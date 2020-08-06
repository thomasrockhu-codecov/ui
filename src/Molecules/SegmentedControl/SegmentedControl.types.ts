import React, { ReactNode } from 'react';

export type OverlayProps = {
  $count: number;
  $selected: number;
};

export type ItemProps = {
  itemId: number;
  onItemClick?: (e: React.MouseEvent, selected: number) => void;
  className?: string;
  active?: boolean;
  children: ReactNode;
};

export type ContainerProps = {
  selectedInitially?: number;
  /**
   * Using this prop will enable controlled behaviour
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  selected?: number;
  className?: string;
  onClick?: (e: React.MouseEvent, selected: number) => void;
};

export type ItemComponent = React.FC<ItemProps>;
export type SegmentedControlComponent = React.FC<ContainerProps> & { Item: ItemComponent };
