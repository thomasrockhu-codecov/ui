import React from 'react';
import { IconBase } from '../IconBase';
import { ChildProps } from '../IconBase.types';

export const FinanceGrowth = ({ ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <path
        d="M15.64 5.47L19 2.11l3.36 3.36-1.06 1.06-1.55-1.55V22h-1.5V4.98L16.7 6.53l-1.06-1.06zM14.75 8v14h-1.5V8h1.5zm-5 4v10h-1.5V12h1.5zm-5 4v6h-1.5v-6h1.5z"
        fillRule="nonzero"
      />
    </IconBase>
  );
};

FinanceGrowth.displayName = 'OldIcon.FinanceGrowth';
