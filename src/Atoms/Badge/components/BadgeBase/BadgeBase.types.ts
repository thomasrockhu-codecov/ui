import { Theme } from '../../../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never;
export type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color'>;

export type ColorFn = (t: Theme) => Values<Theme['color']>;

export type BadgeBaseProps = HtmlProps & {
  color?: ColorFn;
  secondaryColor?: ColorFn;
  backgroundColor?: ColorFn;
  badgeSize: number;
  variant?: 'square' | 'circle' | 'rect'; // add triangle?
  weight?: string;
};

export type WrapperProps = HtmlProps & {
  $color: BadgeBaseProps['color'];
  $secondaryColor?: BadgeBaseProps['secondaryColor'];
  $backgroundColor?: BadgeBaseProps['backgroundColor'];
  $badgeSize: BadgeBaseProps['badgeSize'];
  $variant?: BadgeBaseProps['variant'];
  $weight?: BadgeBaseProps['weight'];
};

export type BadgeBaseComponent = React.FC<BadgeBaseProps>;
export type WrapperComponent = React.FC<WrapperProps>;
