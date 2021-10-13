import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const fillColor = getColor(p.theme, p.theme.color.card);
    return `fill: ${fillColor};`;
  }}
`;

export const InfoPending = ({ ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <StyledPath d="M10 20C4.4771525 20 0 15.5228475 0 10S4.4771525 0 10 0s10 4.4771525 10 10-4.4771525 10-10 10z" />
      <path d="M10 0c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10S0 15.5228475 0 10 4.4771525 0 10 0zm0 8c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2zM4 8c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2zm12 0c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z" />
    </IconBase>
  );
};

InfoPending.displayName = 'OldIcon.InfoPending';
