import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { LabelBadgeComponent, StyledBaseBadgeProps } from './LabelBadge.types';
import { BaseBadge } from '../BaseBadge';
import {
  PRIMARY_HORIZONTAL_PADDING,
  PRIMARY_VERTICAL_PADDING,
  SECONDARY_HORIZONTAL_PADDING,
} from './LabelBadge.constants';

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  ${(p) =>
    p.$type === 'secondary'
      ? `padding: 0 ${p.theme.spacing.unit(SECONDARY_HORIZONTAL_PADDING)}px;`
      : `padding: ${p.theme.spacing.unit(PRIMARY_VERTICAL_PADDING)}px ${p.theme.spacing.unit(
          PRIMARY_HORIZONTAL_PADDING,
        )}px;`}
`;

export const LabelBadge: LabelBadgeComponent = ({
  badgeColor,
  color,
  type,
  weight,
  children,
  ...htmlProps
}) => {
  // default textcolor to textLight
  const textColor: ColorFn = (t) => (color ? color(t) : t.color.textLight);

  return (
    <StyledBaseBadge badgeColor={badgeColor} $type={type} variant="rect" {...htmlProps}>
      <Typography
        // Looks weird but according to the design system,
        // Typography's type="tertiary" is equal to LabelBadge's type="secondary" 😅
        type={type === 'secondary' ? 'tertiary' : 'secondary'}
        color={textColor}
        weight={weight}
      >
        {children}
      </Typography>
    </StyledBaseBadge>
  );
};
