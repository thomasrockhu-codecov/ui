import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { Props } from './Avatar.types';

import Typography from '../../Atoms/Typography';

const getSize = (p: StyledProps<Props>) => {
  switch (p.size) {
    case 'm':
      return p.theme.spacing.unit(8);
    case 's':
      return p.theme.spacing.unit(5);
    default:
      return p.theme.spacing.unit(8);
  }
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.color.backgroundDark};
  width: ${getSize}px;
  height: ${getSize}px;
  font-size: ${getSize}px;
  border-radius: 50%;
  line-height: ${p =>
    p.theme.spacing.unit(8) - 1}px; /* FIXME: font is buggy, so baseline is 1px off */
`;

const StyledTypography = styled(Typography)<Props>`
  ${p => {
    switch (p.size) {
      case 'm':
        return '';
      case 's':
        return `font-size: ${p.theme.spacing.unit(Number(p.size)) / 2.5}px;`;
      default:
        return '';
    }
  }}
`;

export const Avatar: React.FunctionComponent<Props> = ({ children, size = 'm' }) => (
  <StyledDiv size={size}>
    <StyledTypography size={size} type="tertiary" color={t => t.color.textLight}>
      {children}
    </StyledTypography>
  </StyledDiv>
);
