import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c

type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Props = {
  numberOfSteps: number;
  currentStep: number;
  /** Label that will be rendered together with each corresponding step bubble
   * The array must be same length as numberOfSteps
   * Labels will be hidden on smaller screen widths */
  stepLabels?: string[];
  colorDone?: ColorFn;
  colorActive?: ColorFn;
  colorNext?: ColorFn;
  colorText?: ColorFn;
  colorLabel?: ColorFn;
  titleContainer?: string;
  titleDone?: string;
  titleActive?: string;
  titleNext?: string;
};
