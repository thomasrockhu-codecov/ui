import React from 'react';
import Badge from '../..';
import FeedbackBanner from '../../../FeedbackBanner';
import { Flexbox } from '../../../..';

export default {
  title: 'Molecules / Badge / StatusBadge',
};

export const informationStatusBadge = () => (
  <>
    <FeedbackBanner title="NOTE" variant="warning">
      Triangle shape for warning variant yet to be implemented.
    </FeedbackBanner>
    <Flexbox container>
      <Flexbox container direction="column">
        <Badge.StatusBadge variant="create" badgeSize="xl" />
        <Badge.StatusBadge variant="create" badgeSize="l" />
        <Badge.StatusBadge variant="create" badgeSize="m" />
        <Badge.StatusBadge variant="create" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.StatusBadge variant="complete" badgeSize="xl" />
        <Badge.StatusBadge variant="complete" badgeSize="l" />
        <Badge.StatusBadge variant="complete" badgeSize="m" />
        <Badge.StatusBadge variant="complete" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.StatusBadge variant="pending" badgeSize="xl" />
        <Badge.StatusBadge variant="pending" badgeSize="l" />
        <Badge.StatusBadge variant="pending" badgeSize="m" />
        <Badge.StatusBadge variant="pending" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.StatusBadge variant="error" badgeSize="xl" />
        <Badge.StatusBadge variant="error" badgeSize="l" />
        <Badge.StatusBadge variant="error" badgeSize="m" />
        <Badge.StatusBadge variant="error" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.StatusBadge variant="warning" badgeSize="xl" />
        <Badge.StatusBadge variant="warning" badgeSize="l" />
        <Badge.StatusBadge variant="warning" badgeSize="m" />
        <Badge.StatusBadge variant="warning" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.StatusBadge variant="information" badgeSize="xl" />
        <Badge.StatusBadge variant="information" badgeSize="l" />
        <Badge.StatusBadge variant="information" badgeSize="m" />
        <Badge.StatusBadge variant="information" badgeSize="s" />
      </Flexbox>
    </Flexbox>
  </>
);
informationStatusBadge.story = {
  name: 'Status Badge - Information',
};
