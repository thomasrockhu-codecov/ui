import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const StockSmallArrow = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <path d="M21.75 5.25V11h-1.5V8.09l-6.02 7.3-5.52-3.58-5.12 6.65-1.18-.92L8.37 9.8l5.55 3.62 5.49-6.66H16v-1.5z" />
    </IconBase>
  );
};

StockSmallArrow.displayName = 'OldIcon.StockSmallArrow';
