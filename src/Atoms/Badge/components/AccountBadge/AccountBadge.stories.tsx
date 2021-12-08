import React from 'react';
import styled from 'styled-components';
import { Display } from '../../../../common/Display';
import { Flexbox, Typography } from '../../../..';
import Badge from '../..';

export default {
  title: 'Atoms / Badge / AccountBadge',
};

export const CommonUseCases = () => (
  <Flexbox container>
    <Flexbox container direction="column">
      <Badge.AccountBadge badgeColor={(t) => t.color.svgFill} badgeSize="l">
        ISK
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.svgFill} badgeSize="m">
        ISK
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.svgFill} badgeSize="s">
        ISK
      </Badge.AccountBadge>
    </Flexbox>

    <Flexbox container direction="column">
      <Badge.AccountBadge badgeColor={(t) => t.color.positive} badgeSize="l">
        SEB
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.positive} badgeSize="m">
        SEB
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.positive} badgeSize="s">
        SEB
      </Badge.AccountBadge>
    </Flexbox>

    <Flexbox container direction="column">
      <Badge.AccountBadge badgeColor={(t) => t.color.cta} badgeSize="l">
        Handels
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.cta} badgeSize="m">
        HB
      </Badge.AccountBadge>
      <Badge.AccountBadge badgeColor={(t) => t.color.cta} badgeSize="s">
        HB
      </Badge.AccountBadge>
    </Flexbox>
  </Flexbox>
);
CommonUseCases.story = {
  name: 'Common use cases',
};

const StyledTypography = styled(Typography)`
  font-size: 8px;
  color: ${(p) => p.theme.color.positive};
`;

export const customChildren = () => (
  <Display
    items={[
      {
        title: 'Typography as child',
        component: (
          <Badge.AccountBadge>
            <Typography type="caption">ICA</Typography>
          </Badge.AccountBadge>
        ),
      },
      {
        title: 'Styled typography as child',
        component: (
          <Badge.AccountBadge>
            <StyledTypography>Nordea</StyledTypography>
          </Badge.AccountBadge>
        ),
      },
    ]}
  />
);

customChildren.story = {
  name: 'Custom children',
};
