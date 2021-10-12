import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const DiagonalWithCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M 12 21.816406 C 9.683594 21.816406 7.558594 21.011719 5.875 19.667969 L 19.667969 5.875 C 21.011719 7.558594 21.816406 9.683594 21.816406 12 C 21.816406 17.414062 17.414062 21.816406 12 21.816406 M 2.183594 12 C 2.183594 6.585938 6.585938 2.183594 12 2.183594 C 14.316406 2.183594 16.441406 2.988281 18.125 4.332031 L 4.332031 18.125 C 2.988281 16.441406 2.183594 14.316406 2.183594 12 M 12 0 C 5.382812 0 0 5.382812 0 12 C 0 18.617188 5.382812 24 12 24 C 18.617188 24 24 18.617188 24 12 C 24 5.382812 18.617188 0 12 0" />
    </IconBase>
  );
};

DiagonalWithCircle.displayName = 'Icon.DiagonalWithCircle';
