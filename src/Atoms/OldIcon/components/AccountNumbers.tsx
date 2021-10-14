import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const AccountNumbers = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 28 28">
      <g fillRule="evenodd">
        <path d="M0 7h28v2H0zM27 28L27 26H1v2zM3 11h2v13H3zM18 11h2v13h-2zM8 11h2v13H8zM13 11h2v13h-2zM23 11h2v13h-2z" />
        <path d="M28 7l-.896 1.789-13.999-7L14 0l14 7z" />
        <path d="M0 7l.895 1.789 14-7L14 0A91306.11 91306.11 0 010 7z" />
      </g>
    </IconBase>
  );
};

AccountNumbers.displayName = 'OldIcon.AccountNumbers';
