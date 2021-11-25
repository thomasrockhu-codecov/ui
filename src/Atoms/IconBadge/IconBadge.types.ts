import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never;

export type ColorFn = (t: Theme) => Values<Theme['color']>;

export type IconBadgeProps = {
  icon: string; // Get back to this
  iconColor?: ColorFn;
  secondaryIconColor?: ColorFn;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | 'xl';
};

export type WrapperComponent = {
  badgeSize: number;
  backgroundColor: ColorFn;
};
