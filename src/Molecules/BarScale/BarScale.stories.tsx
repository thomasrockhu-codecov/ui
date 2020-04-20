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
  indicatorText = 'Hello world',
  showValue = false,
} = {}) => ({
  value: number('Value', value),
  indicatorText: text('Indicator text', indicatorText),
  showValue: boolean('showValue', showValue),
});

const getBarScalePropsWithMax = ({
  value = 0,
  indicatorText = 'Hello world',
  showValue = false,
  max = 7,
} = {}) => ({
  value: number('Value', value),
  indicatorText: text('Indicator text', indicatorText),
  showValue: boolean('showValue', showValue),
  max: number('max', max),
});

export const BarScaleWithValue2 = () => (
  <BarScale
    {...getBarScaleProps({
      value: 2,
      indicatorText: 'Low',
      showValue: true,
    })}
    max={7}
    axisLabel={
      <Flexbox container justifyContent="space-between">
        <Flexbox item>Low</Flexbox>
        <Flexbox item>Medium</Flexbox>
        <Flexbox item>High</Flexbox>
      </Flexbox>
    }
  />
);

export const BarScaleWithLongText = () => (
  <BarScale
    {...getBarScaleProps({
      value: 1,
      indicatorText: 'Long Long Long Long text',
      showValue: true,
    })}
    max={7}
    axisLabel={
      <Flexbox container justifyContent="space-between">
        <Flexbox item>Low</Flexbox>
        <Flexbox item>Medium</Flexbox>
        <Flexbox item>High</Flexbox>
      </Flexbox>
    }
  />
);

export const BarScaleWithOverrideMaxLength = () => (
  <BarScale
    {...getBarScalePropsWithMax({
      value: 6,
      indicatorText: 'Long Long Long Long Long Long Long Long Long Long Long Long Long text',
      showValue: true,
      max: 7,
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
