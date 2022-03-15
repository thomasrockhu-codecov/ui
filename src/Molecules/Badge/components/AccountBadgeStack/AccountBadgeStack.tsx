import React from 'react';
import styled, { css } from 'styled-components';
import Badge from '../..';
import { AccountBadgeSize } from '../AccountBadge/AccountBadge.constants';
import { AccountBadgeStackComponent, AccountBadgeStackProps } from './AccountBadgeStack.types';

const BORDER_WIDTH = 2;

const CROSS_FADE = 1; // used for anti-aliasing

const CircleWrapper = styled.div<{ $size: number }>`
  border-radius: 50%;
  display: inline-flex;
  position: relative;

  ${({ theme, $size }) => {
    const diameter = theme.spacing.unit($size);
    const radius = diameter / 2;

    return css`
      &:not(:last-of-type) {
        /*all but the last one*/
        mask: radial-gradient(
          circle at ${diameter}px,
          transparent ${radius + BORDER_WIDTH / 2}px,
          white ${radius + BORDER_WIDTH / 2 + CROSS_FADE}px
        );
      }

      &:not(:first-of-type) {
        /*all but the first one*/
        margin-left: -${radius - BORDER_WIDTH / 2}px;
      }
    `;
  }}
`;

const StyledContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: inline-flex;
`;

const disabledColorFn = () => 'currentColor';

export const AccountBadgeStack: AccountBadgeStackComponent = React.forwardRef<
  HTMLDivElement,
  AccountBadgeStackProps
>(
  (
    {
      className,
      items,
      badgeSize = 's',
      maxElementsInStack,
      truncationBadgeColor,
      truncationWrapper,
      disabled,
    },
    ref,
  ) => {
    const size = typeof badgeSize === 'number' ? badgeSize : AccountBadgeSize[badgeSize];
    const exceedsMax = maxElementsInStack ? items.length >= maxElementsInStack : false;
    const passThroughIndex = maxElementsInStack ? maxElementsInStack - 1 : items.length;
    const amountOfTruncatedBadges = maxElementsInStack ? items.length - maxElementsInStack + 1 : 0;

    return (
      <StyledContainer className={className} ref={ref}>
        {items.slice(0, passThroughIndex).map((passedItem) => {
          return (
            <CircleWrapper $size={size}>
              <Badge.Account
                badgeSize={badgeSize}
                badgeColor={disabled ? disabledColorFn : passedItem.badgeColor}
              >
                {passedItem.label}
              </Badge.Account>
            </CircleWrapper>
          );
        })}

        {exceedsMax ? (
          <CircleWrapper $size={size}>
            <Badge.Account
              badgeSize={badgeSize}
              badgeColor={disabled ? disabledColorFn : truncationBadgeColor}
            >
              {typeof truncationWrapper === 'function'
                ? truncationWrapper({ children: `+${amountOfTruncatedBadges}` })
                : `+${amountOfTruncatedBadges}`}
            </Badge.Account>
          </CircleWrapper>
        ) : null}
      </StyledContainer>
    );
  },
);
