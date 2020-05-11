import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { DevelopmentProps, DevelopmentComponent } from './Development.types';
import { Number as NumberComponent } from '../..';
import { Theme } from '../../theme/theme.types';
import { getRoundedValue } from '../../Molecules/Number/Number';

const getPrefix = (value?: number | null) => {
  if (!value) return '';
  return value > 0 ? '▲' : '▼';
};

const getColor = ({
  value,
  theme,
  positiveColor = c => c.color.positive,
  negativeColor = c => c.color.negative,
}: Pick<DevelopmentProps, 'value' | 'positiveColor' | 'negativeColor'> & { theme: Theme }) => {
  if (!value || !Number.isFinite(value)) return theme.color.text;
  return value > 0 ? positiveColor(theme) : negativeColor(theme);
};

const StyledDevelopment = styled.span<DevelopmentProps>`
  color: ${getColor};
`;

const Development: DevelopmentComponent = props => {
  const {
    value,
    decimals,
    maximumDecimals,
    minimumDecimals,
    ticks,
    positiveColor,
    negativeColor,
    className,
    icon = false,
  } = props;
  const roundedValue = !R.isNil(value)
    ? getRoundedValue(value, { ticks, decimals, maximumDecimals, minimumDecimals })
    : value;
  return (
    <StyledDevelopment
      className={className}
      value={roundedValue}
      positiveColor={positiveColor}
      negativeColor={negativeColor}
    >
      <span aria-hidden>{icon && getPrefix(roundedValue)}</span>
      <NumberComponent sign {...props} />
    </StyledDevelopment>
  );
};

export { Development };
Development.displayName = 'Development';
