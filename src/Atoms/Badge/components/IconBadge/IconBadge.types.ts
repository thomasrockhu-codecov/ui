import { Theme } from '../../../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // TODO: Move to shared

export type ColorFn = (t: Theme) => Values<Theme['color']>; // TODO: Move to shared

type IconBadgeProps = {
  icon: string; // TODO: Get back to this
  iconColor?: ColorFn;
  secondaryIconColor?: ColorFn;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | 'xl';
};

export type IconBadgeComponent = React.FC<IconBadgeProps>;
