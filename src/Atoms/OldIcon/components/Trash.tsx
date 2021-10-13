import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Trash = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path d="M11.2 0v2.52631579H16v1.68421053L14.3 4.21 13.6 16H2.4L1.699 4.21 0 4.21052632V2.52631579L4.8 2.526V0h6.4zm1.6 4.21052632H3.2L4 14.3157895h8l.8-10.10526318zM7.2 5.89473684v6.73684206H5.6V5.89473684h1.6zm3.2 0v6.73684206H8.8V5.89473684h1.6zm-.8-4.21052631H6.4L6.399 2.526H9.6v-.84178947z" />
    </IconBase>
  );
};

Trash.displayName = 'OldIcon.Trash';
