import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const ChevronRight = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon
        points="19.969 4 24 8.027 12 20 0 8.027 4.031 4 12 11.952"
        transform="rotate(-90 12 12)"
      />
    </IconBase>
  );
};

ChevronRight.displayName = 'OldIcon.ChevronRight';
