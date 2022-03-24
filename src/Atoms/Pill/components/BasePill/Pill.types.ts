import { Theme } from '../../../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Props = {
  barColor?: ColorFn;
  noPadding?: boolean;
  children: React.ReactNode;
  className?: string;
};
