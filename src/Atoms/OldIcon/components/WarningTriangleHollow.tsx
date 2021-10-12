import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const WarningTriangleHollow = (props: BaseProps) => (
  <IconBase {...props} viewBox="2 2 34 34">
    <path
      d="M35.104 32.25L18.029.89.893 32.25h34.21zM18.022 6.11l12.873 23.64H5.105L18.022 6.11z"
      fillRule="nonzero"
    />
    <path d="M16.75 23.5h2.5V26h-2.5z" />
    <path fillRule="nonzero" d="M19.375 12.448v8.75h-2.5v-8.75z" />
  </IconBase>
);

WarningTriangleHollow.displayName = 'Icon.WarningTriangleHollow';
