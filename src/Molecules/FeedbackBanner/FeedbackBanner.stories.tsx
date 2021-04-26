import React from 'react';
import { HashRouter } from 'react-router-dom';
import { select, withKnobs } from '@storybook/addon-knobs';

import { Box, Card, FeedbackBanner, Flexbox, Spinner, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / FeedbackBanner',
  parameters: {
    component: FeedbackBanner,
  },
  decorators: [withKnobs],
};

export const defaultUsage = () => (
  <FeedbackBanner title="Feedback banner">
    Feedback banner should be used within modules to display information that needs attention.
    Content is flexible, it can contain links and plain text.
  </FeedbackBanner>
);

defaultUsage.story = {
  name: 'Default usage',
};

export const displayingTitle = () => (
  <Display
    items={[
      {
        title: 'With title',
        component: (
          <FeedbackBanner title="This is a title">This message has a title</FeedbackBanner>
        ),
      },
      {
        title: 'Without title',
        component: <FeedbackBanner>This message does not have a title</FeedbackBanner>,
      },
    ]}
  />
);

displayingTitle.story = {
  name: 'Displaying title',
};

export const differentVariant = () => (
  <Display
    items={[
      {
        title: 'info',
        component: (
          <FeedbackBanner title="Info" variant="info">
            This is an information message
          </FeedbackBanner>
        ),
      },
      {
        title: 'error',
        component: (
          <FeedbackBanner title="Error" variant="error">
            This is an error message
          </FeedbackBanner>
        ),
      },
      {
        title: 'warning',
        component: (
          <FeedbackBanner title="Warning" variant="warning">
            This is a warning message
          </FeedbackBanner>
        ),
      },
      {
        title: 'success',
        component: (
          <FeedbackBanner title="Success" variant="success">
            This is a success message
          </FeedbackBanner>
        ),
      },
    ]}
  />
);

differentVariant.story = {
  name: 'Different variant',
};

export const complexChildren = () => (
  <HashRouter>
    <FeedbackBanner title="Warning, complex child" variant="warning">
      <>
        <p>The message can also be structured as a more complex item than just a string</p>
        <p>
          For example, you can provide a Spinner <Spinner id="defaultSpinner" /> if you want to
        </p>
      </>
    </FeedbackBanner>
  </HashRouter>
);

complexChildren.story = {
  name: 'Complex children',
};

export const differentScopes = () => (
  <Box p={5} backgroundColor={(t) => t.color.background}>
    <Flexbox container direction="column" gutter={20}>
      <Card>
        <Box p={5}>
          <Flexbox container direction="column" gutter={2}>
            <Flexbox item>
              <Typography type="primary">This card has a FeedbackBanner as a child</Typography>
            </Flexbox>
            <Flexbox item>
              <FeedbackBanner
                scope="module"
                title="Module scope"
                variant={select('Variant', ['info', 'warning', 'error', 'success'], 'info')}
              >
                This FeedbackBanner is used by default, meant for placement within a module scope
              </FeedbackBanner>
            </Flexbox>
          </Flexbox>
        </Box>
      </Card>
      <Flexbox item container direction="column" gutter={2}>
        <Flexbox item>
          <FeedbackBanner
            scope="page"
            title="Page scope"
            variant={select('Variant', ['info', 'warning', 'error', 'success'], 'info')}
          >
            This FeedbackBanner is used when placed within a page scope
          </FeedbackBanner>
        </Flexbox>
        <Flexbox item>
          <Card>
            <Box p={5}>
              <Typography type="primary">Some dummy page</Typography>
            </Box>
          </Card>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </Box>
);

differentScopes.story = {
  name: 'Different scopes',
};
