import React from 'react';
import Badge from '../..';
import FeedbackBanner from '../../../FeedbackBanner';
import { Box, Flexbox, Typography } from '../../../..';

export default {
  title: 'Molecules / Badge / Status',
  parameters: {
    component: Badge.Status,
  },
};

export const InformationStatusBadge = () => (
  <>
    <Box mb={4}>
      <Typography type="title2">Default Status Badge</Typography>
      <Box>
        <Badge.Status />
      </Box>
    </Box>
    <Box mb={4}>
      <Typography type="title2">All combinations</Typography>
      <FeedbackBanner title="NOTE" variant="warning">
        Triangle shape for warning variant yet to be implemented.
      </FeedbackBanner>
    </Box>
    <Flexbox container>
      <Flexbox container direction="column">
        <Badge.Status variant="create" badgeSize="xl" />
        <Badge.Status variant="create" badgeSize="l" />
        <Badge.Status variant="create" badgeSize="m" />
        <Badge.Status variant="create" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Status variant="complete" badgeSize="xl" />
        <Badge.Status variant="complete" badgeSize="l" />
        <Badge.Status variant="complete" badgeSize="m" />
        <Badge.Status variant="complete" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Status variant="pending" badgeSize="xl" />
        <Badge.Status variant="pending" badgeSize="l" />
        <Badge.Status variant="pending" badgeSize="m" />
        <Badge.Status variant="pending" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Status variant="error" badgeSize="xl" />
        <Badge.Status variant="error" badgeSize="l" />
        <Badge.Status variant="error" badgeSize="m" />
        <Badge.Status variant="error" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Status variant="warning" badgeSize="xl" />
        <Badge.Status variant="warning" badgeSize="l" />
        <Badge.Status variant="warning" badgeSize="m" />
        <Badge.Status variant="warning" badgeSize="s" />
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Status variant="information" badgeSize="xl" />
        <Badge.Status variant="information" badgeSize="l" />
        <Badge.Status variant="information" badgeSize="m" />
        <Badge.Status variant="information" badgeSize="s" />
      </Flexbox>
    </Flexbox>
  </>
);
InformationStatusBadge.story = {
  name: 'Default and all combinations',
};
