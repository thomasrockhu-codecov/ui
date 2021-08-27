import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { isNumber } from '../../common/utils';
import { BarProps, Props } from './BarScale.types';
import { Box, Flexbox } from '../..';

const Indicator = styled(Box).withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<BarProps>`
  height: ${({ theme }) => theme.spacing.unit(4)}px;
  margin-left: 2px;
  margin-right: 2px;
  flex: 1 1 auto;
  background: ${(p) =>
    p.isActive ? p.theme.color.barScaleActiveBar : p.theme.color.barScaleInactiveBar};
`;

export const BarScale: React.FC<Props> = ({ value = 0, max = 7, axisLabel = null }) => {
  const verifiedMaxRating = isNumber(max) ? max : 7;
  const clampedValue = isNumber(value) ? Math.max(0, Math.min(value, max)) : 0;
  const isActive = (bar: number) => bar <= clampedValue;

  return (
    <Box mt={1}>
      <Flexbox container gutter={1}>
        {R.range(1, verifiedMaxRating + 1)?.map((bar) => (
          <Indicator isActive={isActive(bar)} />
        ))}
      </Flexbox>
      {axisLabel}
    </Box>
  );
};

export default BarScale;
