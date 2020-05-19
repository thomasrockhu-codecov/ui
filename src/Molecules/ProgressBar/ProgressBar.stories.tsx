import React from 'react';
import { number, array, withKnobs } from '@storybook/addon-knobs';
import ProgressBar from '.';
import { Box, Flexbox } from '../..';

export default {
  title: 'Molecules | ProgressBar',
  decorators: [withKnobs],
};

const getProps = ({ numberOfSteps = 3, currentStep = 1, stepLabels = ['foo', 'bar', 'baz'] }) => ({
  numberOfSteps: number('Number of steps', numberOfSteps),
  currentStep: number('Current step', currentStep),
  stepLabels: array('Step labels', stepLabels),
});

export const Default = () => {
  return <ProgressBar {...getProps({ numberOfSteps: 3, currentStep: 2, stepLabels: [] })} />;
};

export const WithLabels = () => {
  const stepLabels: string[] = ['Lorem ipsum', 'Dolor sit amet', 'Foo bar'];
  return (
    <Box px={10}>
      <ProgressBar {...getProps({ numberOfSteps: 3, currentStep: 2, stepLabels })} />
    </Box>
  );
};

export const StepProgression = () => {
  const stepLabels = ['One', 'Two', 'Three'];
  return (
    <Flexbox container direction="column" gutter={2}>
      <ProgressBar numberOfSteps={3} currentStep={1} stepLabels={stepLabels} />
      <ProgressBar numberOfSteps={3} currentStep={2} stepLabels={stepLabels} />
      <ProgressBar numberOfSteps={3} currentStep={3} stepLabels={stepLabels} />
    </Flexbox>
  );
};

export const LotsOfSteps = () => {
  const stepLabels = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Ego', 'Sum'];
  return (
    <Box px={10}>
      <ProgressBar numberOfSteps={7} currentStep={4} stepLabels={stepLabels} />
    </Box>
  );
};
