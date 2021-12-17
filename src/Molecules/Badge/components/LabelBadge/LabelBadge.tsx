import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../..';
import { LabelBadgeComponent, LabelBadgeProps, StyledBaseBadgeProps } from './LabelBadge.types';
import { BaseBadge } from '../BaseBadge';
import {
  PRIMARY_HORIZONTAL_PADDING,
  PRIMARY_VERTICAL_PADDING,
  SECONDARY_HORIZONTAL_PADDING,
} from './LabelBadge.constants';

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  ${(p) =>
    p.$type === 'primary'
      ? `padding: ${p.theme.spacing.unit(PRIMARY_VERTICAL_PADDING)}px ${p.theme.spacing.unit(
          PRIMARY_HORIZONTAL_PADDING,
        )}px;`
      : `padding: 0 ${p.theme.spacing.unit(SECONDARY_HORIZONTAL_PADDING)}px;`}
`;

export const LabelBadge: LabelBadgeComponent = React.forwardRef<HTMLSpanElement, LabelBadgeProps>(
  (
    {
      badgeColor = (t) => t.color.cta,
      color = (t) => t.color.textLight,
      type = 'primary',
      weight,
      children,
      ...htmlProps
    },
    ref,
  ) => {
    return (
      <StyledBaseBadge {...htmlProps} ref={ref} badgeColor={badgeColor} $type={type} variant="rect">
        <Typography
          // Looks weird but according to the design system,
          // Typography's type="secondary" is equal to LabelBadge's type="primary" 😅
          type={type === 'primary' ? 'secondary' : 'tertiary'}
          color={color}
          weight={weight}
        >
          {children}
        </Typography>
      </StyledBaseBadge>
    );
  },
);
