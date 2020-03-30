import React from 'react';
import styled, { css, ThemedStyledProps } from 'styled-components';
import Typography from '../Typography';

import { Props } from './Pill.types';
import { Theme } from '../../theme/theme.types';
import { isFunction } from '../../common/utils';

const getColor = (props: ThemedStyledProps<Props, Theme>) => {
  const { barColor, theme } = props;

  if (isFunction(barColor)) {
    return barColor(theme);
  }

  return 'transparent';
};

const barStyles = css<Props>`
  border-left: ${p => p.theme.spacing.unit(1)}px solid ${p => getColor(p)};
`;

const StyledDiv = styled.div<Props>`
  display: inline-flex;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.21);
  ${p => (p.barColor ? barStyles : ``)}
  align-items: center;
`;

export const Pill: React.FC<Props> = ({ barColor, className, children }) => (
  <StyledDiv className={className} barColor={barColor}>
    <Typography>{children}</Typography>
  </StyledDiv>
);
Pill.displayName = 'Pill';
