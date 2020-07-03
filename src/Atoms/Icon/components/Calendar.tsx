import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Calendar = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path d="M31 5v25H1V5h30zm-2 6H3v17h26V11zM7 22v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zM7 18v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zM7 14v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm2-7H3v2h26V7zM7 2v3H5V2h2zm20 0v3h-2V2h2z" />
    </IconBase>
  );
};

Calendar.displayName = 'Icon.Calendar';
