import React from 'react';

import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (c: Theme) => Values<Theme['color']>;

export type FeedbackBannerProps = {
  /** @default info */
  variant?: 'info' | 'error' | 'warning' | 'success';
  background?: ColorFn;
  title?: string | React.ReactChild | React.ReactChild[];
  className?: string;
};

export type FeedbackBannerComponent = React.FC<FeedbackBannerProps>;
