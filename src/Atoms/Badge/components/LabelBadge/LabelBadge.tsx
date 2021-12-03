import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { LabelBadgeComponent, StyledBaseBadgeProps } from './LabelBadge.types';
import { BaseBadge } from '../BaseBadge';

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  ${(p) =>
    p.$type === 'secondary'
      ? `padding: 0 ${p.theme.spacing.unit(1)}px;`
      : `padding: ${p.theme.spacing.unit(0.5)}px ${p.theme.spacing.unit(2)}px;`}
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
    <StyledBaseBadge backgroundColor={badgeColor} $type={type} variant="rect" {...htmlProps}>
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
