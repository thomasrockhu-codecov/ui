import React from 'react';
import styled from 'styled-components';
import { TooltipBadgeProps } from './TooltipBadge.types';
import { BaseBadge } from '..';
import Typography from '../../../../Atoms/Typography';
import Button from '../../../Button';
import { TooltipBadgeSize } from './TooltipBadge.constants';

const StyledTypography = styled(Typography)`
  font-weight: 800;
  cursor: default;
`;

const StyledBaseBadge = styled(BaseBadge)`
  ${(p) =>
    typeof p.badgeSize !== 'undefined' ? `width: ${p.theme.spacing.unit(p.badgeSize)}px;` : ''}
  border: 1px solid ${(p) => p.theme.color.bubbleBorder};
`;

const StyledButton = styled(Button)`
  ${(p) => `
    :hover {
      cursor: pointer;
      ${StyledTypography} {
        color: ${p.theme.color.cta};
        cursor: pointer;
      }
      ${StyledBaseBadge} {
        border-color: ${p.theme.color.cta};
      }
    }`}
`;

const mapToBaseBadge = (badgeSize?: keyof typeof TooltipBadgeSize) => {
  switch (badgeSize) {
    case 's':
      return TooltipBadgeSize.s;
    case 'l':
      return TooltipBadgeSize.l;
    default:
      return TooltipBadgeSize.l;
  }
};

const TooltipBadgeContent = React.forwardRef<HTMLSpanElement, { baseBadgeSize: number }>(
  ({ baseBadgeSize, ...htmlProps }, ref) => {
    const typographyType = baseBadgeSize === TooltipBadgeSize.s ? 'caption' : 'secondary';
    return (
      <StyledBaseBadge
        {...htmlProps}
        ref={ref}
        badgeColor={(t) => t.color.bubbleBackground}
        badgeSize={baseBadgeSize}
      >
        <StyledTypography type={typographyType}>?</StyledTypography>
      </StyledBaseBadge>
    );
  },
);

export const TooltipBadge = React.forwardRef<HTMLSpanElement, TooltipBadgeProps>(
  ({ badgeSize, onClick, ...htmlProps }, ref) => {
    const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);

    return onClick ? (
      <StyledButton variant="neutral" onClick={onClick}>
        <TooltipBadgeContent {...htmlProps} ref={ref} baseBadgeSize={baseBadgeSize} />
      </StyledButton>
    ) : (
      <TooltipBadgeContent {...htmlProps} ref={ref} baseBadgeSize={baseBadgeSize} />
    );
  },
);
