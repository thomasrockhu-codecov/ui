import React from 'react';
import { LinkProps } from '../Link/Link.types';

export type Props = {
  as?: string;
  className?: string;
};

export type LinkBuyComponent = React.FunctionComponent<LinkProps & Props>;
