import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Profile = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <StyledPath
      cssAttribute="stroke"
      d="M5 27v-5.4C5 19.612 6.642 18 8.667 18h14.666C25.358 18 27 19.612 27 21.6V27M16 4a5 5 0 110 10 5 5 0 010-10z"
      strokeColorFn={fill}
      fill="#ffffff"
      strokeWidth="2"
    />
  </IconBase>
);

Profile.displayName = 'Icon.Profile';
