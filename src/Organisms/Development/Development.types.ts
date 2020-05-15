import React from 'react';
import { ColorSets } from '../../theme/theme.types';
import { Props as NumberProps } from '../../Molecules/Number/Number.types';

type AllSets = ColorSets[keyof ColorSets];
type ColorFn = (c: ColorSets) => AllSets[keyof AllSets];

export type DevelopmentProps = {
  value: number | null | undefined;
  /** @default false */
  icon?: boolean;
  positiveColor?: ColorFn;
  negativeColor?: ColorFn;
  className?: string;
};

export type DevelopmentComponent = React.FC<DevelopmentProps & NumberProps>;
