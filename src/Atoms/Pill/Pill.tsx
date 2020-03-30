import React from 'react';
import styled, { css, ThemedStyledProps } from 'styled-components';

import { Props } from './Pill.types';
import Icon from '../Icon';
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
  border: ${p => p.theme.spacing.unit(1)}pxpx solid ${p => getColor(p)};
`;

const StyledDiv = styled.div<Props>`
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.21);
  box-sizing: border-box;
  ${p => (p.barColor ? barStyles : ``)}
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
