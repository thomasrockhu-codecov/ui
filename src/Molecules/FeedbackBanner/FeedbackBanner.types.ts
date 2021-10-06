import React from 'react';

export type FeedbackBannerProps = {
  /** @default info */
  variant?: 'info' | 'error' | 'warning' | 'success';
  /** @default module */
  scope?: 'module' | 'page';
  title?: string | React.ReactChild | React.ReactChild[];
  className?: string;
};

export type FeedbackBannerComponent = React.FC<FeedbackBannerProps>;
