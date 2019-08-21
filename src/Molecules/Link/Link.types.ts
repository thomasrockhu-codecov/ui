import React from 'react';
import { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';

export type LinkProps = {
  children: React.ReactChild | React.ReactChild[];
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex';
  /** @default _self */
  target?: '_blank';
  to?: ReactRouterDomLinkProps['to'];
  external?: boolean;
  rel?: string;
  disabled?: boolean;
};

export type LinkComponent = React.FunctionComponent<LinkProps>;
