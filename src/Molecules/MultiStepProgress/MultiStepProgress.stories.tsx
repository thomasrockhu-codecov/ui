import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MultiStepProgress from './MultiStepProgress';

export const mockedSteps = [
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

export const mockedStepsNotStarted = [
  { current: false, done: false, label: 'Investment objective', name: 'investment_objective' },
  {
    current: false,
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

storiesOf('Molecules | Multi Step Progress', module)
  .add('Default', () => (
    <>
      <MultiStepProgress
        steps={mockedSteps}
        onStepClick={action(`step click`)}
        onSubStepClick={action(`sub step click`)}
      />
    </>
  ))
  .add('Not started', () => (
    <>
      <MultiStepProgress
        steps={mockedStepsNotStarted}
        onStepClick={action(`step click`)}
        onSubStepClick={action(`sub step click`)}
      />
    </>
  ));
