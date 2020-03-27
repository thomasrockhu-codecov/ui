import React from 'react';
import styled from 'styled-components';

import { Props } from './Pill.types';
import Icon from '../Icon';

const StyledDiv = styled.div<Props>`
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.21);
  border-left: 2px solid ${p => (p.barColor ? p.barColor : '#000')};
  box-sizing: border-box;
`;

export const Pill: React.FC<Props> = ({
  barColor,
  className,
  value,
  onRemoveClick,
  onValueClick,
}) => (
  <StyledDiv className={className} barColor={barColor}>
    <button type="button" title="Edit this selection" onClick={onValueClick}>
      {value}
    </button>
    <button type="button" title="Remove this selection" onClick={onRemoveClick}>
      <Icon.Cross />
    </button>
  </StyledDiv>
);
Pill.displayName = 'Pill';
