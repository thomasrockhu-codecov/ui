import { Theme } from '../../theme/theme.types';

export type ColorFn = (t: Theme) => Values<Theme['color']>;

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type StyledIconBaseProps = {
  colorFn?: ColorFn | string;
  inline?: boolean;
};

export type IconProps = {
  className?: string;
  title?: string;
  color?: ColorFn | string;
  inline?: boolean;
};

export type InternalProps = IconProps & {
  children: React.ReactNode;
  ref?: React.Ref<SVGSVGElement>;
  width: number;
  height: number;
};
