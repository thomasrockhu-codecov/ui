import React from 'react';

import { Pill } from './Pill';
import docs from './Pill.mdx';
import { Flexbox, Icon, Typography, Button } from '../..';

export default {
  title: 'Atoms | Pill',

  parameters: {
    ...docs.parameters,
    component: Pill,
  },
};

export const basicPill = () => <Pill>123</Pill>;

basicPill.story = {
  name: 'Basic Pill',
};

export const pillWithBar = () => (
  <Pill barColor={t => t.color.pill8}>
    <Flexbox container gutter={1} alignItems="center">
      <Flexbox item>
        <Button type="button" variant="neutral">
          <Typography type="tertiary" weight="bold">
            Bollinger
          </Typography>{' '}
          <Typography type="tertiary">1234</Typography>
        </Button>
      </Flexbox>
      <Flexbox item>
        <Button type="button" variant="neutral">
          <Icon.CrossThin size={2} />
        </Button>
      </Flexbox>
    </Flexbox>
  </Pill>
);

pillWithBar.story = {
  name: 'Pill with colored bar',
};
export const pillWithBarAndNoPadding = () => (
  <Pill barColor={t => t.color.pill8} noPadding>
    123
  </Pill>
);

pillWithBarAndNoPadding.story = {
  name: 'Pill with colored bar and no padding',
};
