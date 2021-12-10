import { Theme } from '../../../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never;
export type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color'>;

export type ColorFn = (t: Theme) => Values<Theme['color']>;

export type BaseBadgeProps = HtmlProps & {
  color?: ColorFn;
  secondaryColor?: ColorFn;
  badgeColor?: ColorFn;
  badgeSize?: number;
  variant?: 'square' | 'circle' | 'rect';
  weight?: string;
  symmetricShape?: boolean;
};

export type WrapperProps = HtmlProps & {
  $color: BaseBadgeProps['color'];
  $secondaryColor?: BaseBadgeProps['secondaryColor'];
  $badgeColor?: BaseBadgeProps['badgeColor'];
  $badgeSize: BaseBadgeProps['badgeSize'];
  $variant?: BaseBadgeProps['variant'];
  $weight?: BaseBadgeProps['weight'];
  $applyWidth: boolean;
  $applyMinWidth: boolean;
};

export type BaseBadgeComponent = React.ForwardRefExoticComponent<
  BaseBadgeProps & React.RefAttributes<HTMLSpanElement>
>;
export type WrapperComponent = React.FC<WrapperProps>;
