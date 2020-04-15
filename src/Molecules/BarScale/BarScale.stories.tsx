import React from 'react';
import { boolean, text, number, withKnobs } from '@storybook/addon-knobs';
import { Flexbox } from '../..';
import docs from './BarScale.mdx';
import BarScale from '.';

export default {
  title: 'Molecules | BarScale',
  parameters: {
    ...docs.parameters,
  },
  decorators: [withKnobs],
};

const getBarScaleProps = ({
  value = 0,
  max = 7,
  indicatorText = 'Hello world',
  showValue = false,
} = {}) => ({
  value: number('Value', value),
  max: number('Max', max),
  indicatorText: text('Indicator text', indicatorText),
  showValue: boolean('showValue', showValue),
});

export const BarScaleWithValue4 = () => (
  <BarScale
    {...getBarScaleProps({
      value: 4,
      max: 7,
      indicatorText: 'Medium',
      showValue: true,
    })}
    axisLabel={
      <Flexbox container justifyContent="space-between">
        <Flexbox item>Low</Flexbox>
        <Flexbox item>Medium</Flexbox>
        <Flexbox item>High</Flexbox>
      </Flexbox>
    }
  />
);
