import React from 'react';

export type InfoBoxProps = {
  /** @default info */
  variant?: 'info' | 'error' | 'warning' | 'success';
  title?: string;
  children: React.ReactChild | React.ReactChild[];
  className?: string;
};

export type InfoBoxComponent = React.FC<InfoBoxProps>;
