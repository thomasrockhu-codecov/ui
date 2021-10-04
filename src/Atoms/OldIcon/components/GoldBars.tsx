import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const GoldBars = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 72 72">
      <g fill="none" fillRule="evenodd">
        <rect fill="#01424C" width="72" height="72" rx="36" />
        <path
          d="M44.815 28L48.1 39h8.214l4.181 13.995L34.5 53v-.004L11.5 53l4.188-13.994-.003-.006h8.212l3.291-10.994-.003-.006h17.63zM31.074 42H17.923l-2.393 8h17.938l-2.394-8zm23 0H40.923l-2.393 8h17.938l-2.394-8zm-16.281-.003l-3.583.001L36 47.987l1.793-5.99zM42.574 31H29.423l-2.393 8h17.938l-2.394-8zM21.941 18l6.23 5.017-1.88 2.337-6.232-5.017L21.941 18zm28.118 0l1.882 2.337-6.231 5.017-1.882-2.337L50.06 18zM37.5 15v8h-3v-8h3z"
          fill="#00F0E1"
        />
      </g>
    </IconBase>
  );
};

GoldBars.displayName = 'Icon.GoldBars';
