import React from 'react';
import { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import { Theme } from '../../theme/theme.types';

type Colors = Theme['color'];
type ColorFn = (t: Theme) => Colors['cta'] | Colors['negative'];

export type ButtonProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary' | 'neutral';
  /**
   * @default m
   * @deprecated s
   */
  size?: 's' | 'm' | 'l';
  /** @default false */
  fullWidth?: boolean;
  children: React.ReactChild | React.ReactChild[];
  color?: ColorFn;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** @default button */
  type?: 'button' | 'reset' | 'submit';
  to?: ReactRouterDomLinkProps['to'];
  external?: boolean;
  cms?: boolean;
  rel?: string;
  target?: '_blank' | '_self';
  colorFn?: ColorFn;
  id?: string;
  as?: any;
  loading?: boolean;
  ref?: React.Ref<HTMLAnchorElement> | React.Ref<HTMLButtonElement>;
} & Pick<
  React.DOMAttributes<HTMLButtonElement | HTMLAnchorElement>,
  'onMouseEnter' | 'onMouseLeave' | 'onMouseOver'
>;

export type InnerProps = Omit<ButtonProps, 'variant' | 'size' | 'fullWidth' | 'colorFn'> & {
  $variant?: ButtonProps['variant'];
  $fullWidth?: ButtonProps['fullWidth'];
  $size: Exclude<ButtonProps['size'], undefined>;
  $colorFn?: ColorFn;
};

export type ButtonComponent = React.FC<ButtonProps>;
