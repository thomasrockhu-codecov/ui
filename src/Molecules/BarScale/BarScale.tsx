import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { isNumber } from '../../common/utils';
import { BarProps, Props } from './BarScale.types';
import { Box, Flexbox } from '../..';

const Indicator = styled(Box).withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<BarProps>`
  height: ${({ theme }) => theme.spacing.unit(3)}px;
  background: ${(p) =>
    p.isActive ? p.theme.color.barScaleActiveBar : p.theme.color.barScaleInactiveBar};
`;

export const BarScale: React.FC<Props> = ({ value = 0, max = 7, axisLabel = null }) => {
  const verifiedMaxRating = isNumber(max) ? max : 7;
  const clampedValue = isNumber(value) ? Math.max(0, Math.min(value, max)) : 0;
  const isActive = (bar: number) => bar <= clampedValue;

  return (
    <>
      <Flexbox container gutter={1}>
        {R.range(1, verifiedMaxRating + 1)?.map((bar) => (
          <Flexbox key={bar} item flex="1 1 auto">
            <Indicator isActive={isActive(bar)} />
          </Flexbox>
        ))}
      </Flexbox>
      {axisLabel}
    </>
  );
};

export default BarScale;
