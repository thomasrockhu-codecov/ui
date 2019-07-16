import React from 'react';

export type FeedbackBannerProps = {
  /** @default info */
  variant?: 'info' | 'error' | 'warning' | 'success';
  /** @default gray */
  backgroundColor?: 'gray' | 'white';
  title?: string;
  className?: string;
};

export type FeedbackBannerComponent = React.FC<FeedbackBannerProps>;
