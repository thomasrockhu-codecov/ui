import React from 'react';
import styled, { css } from 'styled-components';
import R from 'ramda';
import { isNumber } from '../../common/utils';
import { Flexbox, Typography, Box } from '../..';
import { Props } from './BarScale.types';

const POSITIONS = {
  FIRST: 'FIST',
  CENTER: 'CENTER',
  LAST: 'LAST',
};

const first = css`
  left: 0;
`;

const center = css`
  left: 50%;
  transform: translate(-50%);
`;

const last = css`
  left: 100%;
  transform: translate(-100%);
`;

const Indicator = styled.span<{ position: string }>`
  position: absolute;
  bottom: 170%;
  min-width:  calc(100% - 16px);
  padding: 0 ${({ theme }) => theme.spacing.unit(2)}px;
  height: ${({ theme }) => theme.spacing.unit(5)}px;;
  white-space: nowrap;
  text-align: center;
  ${p => p.position === POSITIONS.FIRST && first}
  ${p => p.position === POSITIONS.CENTER && center}
  ${p => p.position === POSITIONS.LAST && last}
  background: ${({ theme }) => theme.color.riskLevelActiveBackground};
  color: ${({ theme }) => theme.color.textLight};
`;

const OFFSET_PERCENT = 50;
const StyledFlexbox = styled(Flexbox)<{ isActive: boolean }>`
  position: relative;
  height: ${({ theme }) => theme.spacing.unit(4)}px;
  background: ${p =>
    p.isActive
      ? p.theme.color.riskLevelActiveBackground
      : p.theme.color.riskLevelInactiveBackground};

  &::after {
    display: ${p => (p.isActive ? 'block' : 'none')};
    content: '';
    border: ${({ theme }) => theme.spacing.unit(2)}px solid;
    position: absolute;
    bottom: 70%;
    left: ${OFFSET_PERCENT}%;
    transform: translate(-${OFFSET_PERCENT}%);
    border-color: ${({ theme }) => theme.color.riskLevelActiveBackground} transparent transparent
      transparent;
  }
`;

export const BarScale: React.FC<Props> = ({
  value = 0,
  max = 0,
  showValue = false,
  indicatorText = '',
  axisLabel = null,
}) => {
  const verifiedMaxRating = isNumber(max) ? max : 0;
  const clampedValue = isNumber(value) ? Math.max(0, Math.min(value, max)) : 0;

  const isActive = (bar: number) => bar === clampedValue;
  const getPosition = (position: number): string => {
    if (position === 1) return POSITIONS.FIRST;
    if (position === max) return POSITIONS.LAST;
    return POSITIONS.CENTER;
  };

  return (
    <Box mt={10}>
      <Flexbox container gutter={1}>
        {R.range(1, verifiedMaxRating + 1).map(bar => (
          <Flexbox item flex="1">
            <StyledFlexbox
              container
              justifyContent="center"
              alignItems="center"
              isActive={isActive(bar)}
            >
              {isActive(bar) && (
                <>
                  {
                    <Indicator position={getPosition(clampedValue)}>
                      <Typography type="tertiary" color={t => t.color.textLight}>
                        {indicatorText}
                      </Typography>
                    </Indicator>
                  }

                  <Typography type="tertiary" color={t => t.color.textLight}>
                    {isActive(bar) && showValue && clampedValue}
                  </Typography>
                </>
              )}
            </StyledFlexbox>
          </Flexbox>
        ))}
      </Flexbox>
      {axisLabel}
    </Box>
  );
};

export default BarScale;
