import { Theme } from '../../../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never;
export type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color'>;

export type ColorFn = (t: Theme) => Values<Theme['color']>;

export type BaseBadgeProps = HtmlProps & {
  color?: ColorFn;
  secondaryColor?: ColorFn;
  // TODO: rename to badgeColor
  backgroundColor?: ColorFn;
  badgeSize?: number;
  variant?: 'square' | 'circle' | 'rect'; // add triangle?
  weight?: string;
};

export type WrapperProps = HtmlProps & {
  $color: BaseBadgeProps['color'];
  $secondaryColor?: BaseBadgeProps['secondaryColor'];
  $backgroundColor?: BaseBadgeProps['backgroundColor'];
  $badgeSize: BaseBadgeProps['badgeSize'];
  $variant?: BaseBadgeProps['variant'];
  $weight?: BaseBadgeProps['weight'];
};

export type BaseBadgeComponent = React.FC<BaseBadgeProps>;
export type WrapperComponent = React.FC<WrapperProps>;
