import React from 'react';
import { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';

export type LinkProps = {
  children: React.ReactChild | React.ReactChild[];
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex';
  color?: 'blue' | 'black' | 'inherit';
  /** @default _self */
  target?: '_blank' | '_self';
  to?: ReactRouterDomLinkProps['to'];
  external?: boolean;
  cms?: boolean;
  rel?: string;
  disabled?: boolean;
  as?: any;
  ref?: React.Ref<any>;
} & Pick<
  React.DOMAttributes<HTMLAnchorElement>,
  'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onFocus'
>;

export type LinkComponent = React.FunctionComponent<LinkProps>;
