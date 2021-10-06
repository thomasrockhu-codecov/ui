import { Theme } from '../../theme/theme.types';

export type ColorFn = (t: Theme) => Values<Theme['color']>;
type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

type Size = 's' | 'm' | 'l';

type Children = React.ReactText | React.ReactNode;

export type Props = {
  size?: Size;
  children: Children;
  backgroundColor?: ColorFn;
};

export type StyledFlexboxProps = {
  size?: Size;
  children: Children;
  $backgroundColor?: ColorFn;
};
