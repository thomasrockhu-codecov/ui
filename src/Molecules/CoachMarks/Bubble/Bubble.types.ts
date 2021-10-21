import { Theme } from '../../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Props = {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
  barColor?: ColorFn;
};

export type CardProps = {
  barColor?: ColorFn;
};

export type Component = React.FC<Props>;
