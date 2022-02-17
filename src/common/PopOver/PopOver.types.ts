import React from 'react';
import { ColorFn } from 'common/Types';
import { OffsetArg } from '../../Molecules/Tooltip/Tooltip.types';

export type InModal = boolean;
export type Position =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type Props = {
  className?: string;
  id?: string;
  label: React.ReactNode;
  offset?: OffsetArg;
  position?: Position;
  positionCallback?: (calulatedPostion: Position) => void;
  triggerElement?: Element;
  ariaLabel?: string;
  backgroundColor?: ColorFn;
  borderColor?: ColorFn;
  inModal?: InModal;
  maxWidth?: number;
  pointerEvents?: boolean;
};
