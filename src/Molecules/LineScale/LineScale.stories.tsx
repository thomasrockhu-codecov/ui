import React from 'react';
import { boolean, text, number, color, object, withKnobs } from '@storybook/addon-knobs';
import docs from './LineScale.mdx';
import LineScale from '.';
import { stringify } from 'querystring';

export default {
  title: 'Molecules | LineScale',
  parameters: {
    ...docs.parameters,
  },
  decorators: [withKnobs],
};

const getLineScaleProps = ({
  value = 33,
  averageValue = 55,
  defaultColor = '#FF0000',
  labels = {
    low: '0',
    average: 'Average for category 55.2',
    high: '100',
  },
} = {}) => ({
  value: number('Value', value),
  averageValue: number('Average value', averageValue),
  color: color('Color', defaultColor),
});

export const LineScaleAtLeftEdge = () => (
  <LineScale
    {...getLineScaleProps({
      value: 0,
      averageValue: 0,
    })}
  />
);

export const LineScaleAlmostAtLeftEdge = () => (
  <LineScale
    {...getLineScaleProps({
      value: 1,
      averageValue: 1,
    })}
  />
);

export const LineScaleLeftSide = () => (
  <LineScale
    {...getLineScaleProps({
      value: 7,
      averageValue: 7,
    })}
  />
);

export const LineScaleInTheMiddle = () => (
  <LineScale
    {...getLineScaleProps({
      value: 50,
      averageValue: 50,
    })}
  />
);
export const LineScaleRightSide = () => (
  <LineScale
    {...getLineScaleProps({
      value: 91,
      averageValue: 91,
    })}
  />
);
export const LineScaleAlmostAtRightEdge = () => (
  <LineScale
    {...getLineScaleProps({
      value: 99,
      averageValue: 99,
    })}
  />
);
export const LineScaleAtRightEdge = () => (
  <LineScale
    {...getLineScaleProps({
      value: 100,
      averageValue: 100,
    })}
  />
);
