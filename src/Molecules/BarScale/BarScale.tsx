import React, { useLayoutEffect, useRef, useState } from 'react';
import R from 'ramda';
import styled, { css } from 'styled-components';
import { isHTMLElement, isNumber } from '../../common/utils';
import { BarProps, CheckCollision, IndicatorProps, Props } from './BarScale.types';
import { Box, Flexbox, Typography } from '../..';

const TRIANGLE_TOP_BORDER_SIZE = 2;
const TRIANGLE_SIDE_BORDER_SIZE = 6;
const TRIANGLE_OFFSET = 1;

export const intersectionStyles = css`
  height: ${(p) => p.theme.spacing.unit(1)}px;
  width: ${(p) => p.theme.spacing.unit(1)}px;
  position: absolute;
  bottom: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.unit(TRIANGLE_OFFSET + TRIANGLE_TOP_BORDER_SIZE)}px;
  pointer-events: none;
`;

const IntersectionLeft = styled.div`
  ${intersectionStyles}
  left: 0;
`;
const IntersectionRight = styled.div`
  ${intersectionStyles}
  right: 0;
`;
const leftCollisionStyle = css`
  left: 0;
`;
const rightCollisionStyle = css`
  right: 0;
`;

const Indicator = styled('span').withConfig({
  shouldForwardProp: (prop) => !['leftCollision', 'rightCollision'].includes(prop),
})<IndicatorProps>`
  position: absolute;
  bottom: 100%;
  ${(p) => p.leftCollision && leftCollisionStyle}
  ${(p) => p.rightCollision && rightCollisionStyle}
  margin-bottom: ${({ theme }) =>
    theme.spacing.unit(TRIANGLE_OFFSET + TRIANGLE_TOP_BORDER_SIZE)}px;
  padding: 0 ${({ theme }) => theme.spacing.unit(2)}px;
  height: ${({ theme }) => theme.spacing.unit(5)}px;
  white-space: nowrap;
  text-align: center;
  background: ${({ theme }) => theme.color.barScaleActiveBar};
  color: ${({ theme }) => theme.color.textLight};
`;

const StyledFlexbox = styled(Flexbox).withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<BarProps>`
  position: relative;
  height: ${({ theme }) => theme.spacing.unit(4)}px;
  background: ${(p) =>
    p.isActive ? p.theme.color.barScaleActiveBar : p.theme.color.barScaleInactiveBar};

  &::after {
    display: ${(p) => (p.isActive ? 'block' : 'none')};
    content: '';
    position: absolute;
    bottom: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.unit(TRIANGLE_OFFSET)}px;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 0;
    border-left: ${TRIANGLE_SIDE_BORDER_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIDE_BORDER_SIZE}px solid transparent;
    border-top: ${({ theme }) => theme.spacing.unit(TRIANGLE_TOP_BORDER_SIZE)}px solid
      ${({ theme }) => theme.color.barScaleActiveBar};
  }
`;

const xAxisCollision: CheckCollision = (a, b) => {
  if (!isHTMLElement(a) || !isHTMLElement(b)) {
    return false;
  }

  const { x: bX, width: bWidth } = b.getBoundingClientRect();
  return a.getBoundingClientRect().x <= bX + bWidth;
};

export const BarScale: React.FC<Props> = ({
  value = 0,
  max = 7,
  showValue = false,
  indicatorText = '',
  axisLabel = null,
}) => {
  const verifiedMaxRating = isNumber(max) ? max : 7;
  const clampedValue = isNumber(value) ? Math.max(0, Math.min(value, max)) : 0;
  const isActive = (bar: number) => bar === clampedValue;

  const [leftCollision, setLeftCollision] = useState(false);
  const [rightCollision, setRightCollision] = useState(false);

  const indicatorRef = useRef<HTMLSpanElement>(null);
  const intersectionLeft = useRef<HTMLDivElement>(null);
  const intersectionRight = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (indicatorRef.current && intersectionLeft.current) {
      const hasLeftCollision = xAxisCollision(indicatorRef.current, intersectionLeft.current);
      setLeftCollision(hasLeftCollision);
    }

    if (indicatorRef.current && intersectionRight.current) {
      const hasRightCollision = xAxisCollision(intersectionRight.current, indicatorRef.current);
      setRightCollision(hasRightCollision);
    }
  }, [indicatorRef, intersectionRight, intersectionLeft]);

  return (
    <Box mt={10}>
      <Flexbox container gutter={1}>
        <IntersectionLeft ref={intersectionLeft} />
        <IntersectionRight ref={intersectionRight} />

        {R.range(1, verifiedMaxRating + 1)?.map((bar) => (
          <Flexbox key={bar} item flex="1 1 auto">
            <StyledFlexbox
              container
              justifyContent="center"
              alignItems="center"
              isActive={isActive(bar)}
            >
              {isActive(bar) && (
                <>
                  <Indicator
                    leftCollision={leftCollision}
                    rightCollision={rightCollision}
                    ref={indicatorRef}
                  >
                    <Typography type="tertiary" color={(t) => t.color.textLight}>
                      {indicatorText}
                    </Typography>
                  </Indicator>

                  <Typography type="tertiary" color={(t) => t.color.textLight}>
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
