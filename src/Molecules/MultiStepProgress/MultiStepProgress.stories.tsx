import React from 'react';
import { action } from '@storybook/addon-actions';
import docs from './MultiStepProgress.mdx';
import { MultiStepProgress } from './MultiStepProgress';
import { Typography, CssGrid } from '../..';

const mockedSteps = [
  { current: false, done: true, label: 'Investment objective', name: 'investment_objective' },
  {
    current: true,
    done: false,
    label: 'Time and risk',
    name: 'time_and_risk',
    steps: [
      { current: false, done: true, label: 'Investment period', name: 'investment_period' },
      { current: true, done: false, label: 'Frequency', name: 'frequency' },
      { current: false, done: false, label: 'Amount', name: 'amount' },
    ],
  },
  { current: false, done: false, label: 'Allocations', name: 'allocations' },
];

const mockedStepsNotStarted = [
  { current: false, done: false, label: 'Investment objective', name: 'investment_objective' },
  {
    current: true,
    done: false,
    label: 'Time and risk',
    name: 'time_and_risk',
    steps: [
      { current: false, done: false, label: 'Investment period', name: 'investment_period' },
      { current: false, done: false, label: 'Frequency', name: 'frequency' },
      { current: false, done: false, label: 'Amount', name: 'amount' },
    ],
  },
  { current: false, done: false, label: 'Allocations', name: 'allocations' },
];

export default {
  title: 'Molecules | Multi Step Progress',

  parameters: {
    ...docs.parameters,
    component: MultiStepProgress,
  },
};

export const basicMultiStepProgress = () => (
  <MultiStepProgress
    steps={mockedSteps}
    onStepClick={action(`step click`)}
    onSubStepClick={action(`sub step click`)}
  />
);

basicMultiStepProgress.story = {
  name: 'Basic Multi Step Progress',
};

export const basicMultiStepProgressWithDrawerClose = () => (
  <MultiStepProgress
    steps={mockedSteps}
    onStepClick={action(`step click`)}
    onSubStepClick={action(`sub step click`)}
    closeDrawerOnStepClick
  />
);

basicMultiStepProgressWithDrawerClose.story = {
  name: 'Basic Multi Step Progress (With Closing Drawer)',
};

export const notStartedMultiStepProgress = () => (
  <MultiStepProgress
    steps={mockedStepsNotStarted}
    onStepClick={action(`step click`)}
    onSubStepClick={action(`sub step click`)}
  />
);

export const isSticky = () => (
  <>
    <div>
      <CssGrid.Container
        areas={[['sidebar']]}
        templateColumns={[12]}
        gutter={2}
        sm={{
          areas: [['sidebar', 'page']],
          templateColumns: ['1fr', '2fr'],
          gutter: 5,
        }}
        templateRows={['auto']}
      >
        <CssGrid.Item area="sidebar">
          <MultiStepProgress
            steps={mockedStepsNotStarted}
            onStepClick={action(`step click`)}
            onSubStepClick={action(`sub step click`)}
            isSticky
            stickyTopDistanceUnit={2}
          />
        </CssGrid.Item>
        <CssGrid.Item area="page">
          {Array.from({ length: 70 }, () => (
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
            </Typography>
          ))}
        </CssGrid.Item>
      </CssGrid.Container>
    </div>
  </>
);

notStartedMultiStepProgress.story = {
  name: 'Not Started Multi Step Progress',
};
