import { ColorFn } from 'common/Types';
import React from 'react';
import { Props as TooltipProps } from '../Tooltip.types';

export type Props = {
  ref?: React.RefObject<any>;
  label: React.ReactNode;
  position: TooltipProps['position'];
  positionCallback?: (calulatedPostion: NonNullable<TooltipProps['position']>) => void;
  triggerElement?: Element;
  ariaLabel?: string;
  backgroundColor?: ColorFn;
  borderColor?: ColorFn;
  inModal?: TooltipProps['inModal'];
  maxWidth?: number;
  pointerEvents?: boolean;
};
