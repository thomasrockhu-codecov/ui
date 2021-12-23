import React from 'react';
import styled from 'styled-components';
import { Display } from '../../../../common/Display';
import { Flexbox, Typography } from '../../../..';
import Badge from '../..';

export default {
  title: 'Molecules / Badge / AccountBadge',
  parameters: {
    component: Badge.AccountBadge,
  },
};

export const Showcase = () => (
  <Flexbox container>
    <Flexbox container direction="column">
      <Badge.AccountBadge badgeColor={(t) => t.color.accountBadgeBackground} badgeSize="l">
        ISK
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.accountBadgeBackground} badgeSize="m">
        ISK
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.accountBadgeBackground} badgeSize="s">
        ISK
      </Badge.AccountBadge>
    </Flexbox>

    <Flexbox container direction="column">
      <Badge.AccountBadge badgeColor={(t) => t.color.badgeBackgroundPositive} badgeSize="l">
        SEB
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.badgeBackgroundPositive} badgeSize="m">
        SEB
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.badgeBackgroundPositive} badgeSize="s">
        SEB
      </Badge.AccountBadge>
    </Flexbox>

    <Flexbox container direction="column">
      <Badge.AccountBadge badgeColor={(t) => t.color.badgeBackground} badgeSize="l">
        Handels
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.badgeBackground} badgeSize="m">
        HB
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.badgeBackground} badgeSize="s">
        HB
      </Badge.AccountBadge>
    </Flexbox>
  </Flexbox>
);
Showcase.story = {
  name: 'Showcase',
};

const StyledTypography = styled(Typography)`
  font-size: 8px;
  color: ${(p) => p.theme.color.badgeTextColor};
`;

export const CustomChildren = () => (
  <Display
    items={[
      {
        title: 'Typography as child',
        component: (
          <Badge.AccountBadge>
            <Typography color={(t) => t.color.badgeTextColor} type="caption">
              KF
            </Typography>
          </Badge.AccountBadge>
        ),
      },
      {
        title: 'Styled typography as child',
        component: (
          <Badge.AccountBadge>
            <StyledTypography>ASK</StyledTypography>
          </Badge.AccountBadge>
        ),
      },
    ]}
  />
);

CustomChildren.story = {
  name: 'Custom children',
};
