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
  color = '#FF0000',
  labels = {
    low: '0',
    average: 'Average for category 55.2',
    high: '100',
  },
  averageText = 'Average for category 55.2',
  min = 0,
  max = 100,
} = {}) => ({
  value: number('Value', value),
  averageValue: number('Average value', averageValue),
  color: text('Color', color),
  averageText: text('Average text', averageText),
});

export const LineScaleAtLeftEdge = () => (
  <LineScale
    {...getLineScaleProps({
      value: 0,
      averageValue: 0,
    })}
    valuePrefix="Senast "
  />
);

export const LineScaleAlmostAtLeftEdge = () => (
  <LineScale
    {...getLineScaleProps({
      value: 1,
      averageValue: 1,
    })}
    valuePrefix="Senast "
  />
);

export const LineScaleLeftSide1 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 3,
      averageValue: 3,
    })}
  />
);

export const LineScaleLeftSide2 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 3,
      averageValue: 3,
    })}
    valuePrefix="Senast "
  />
);
export const LineScaleLeftSide3 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 7,
      averageValue: 7,
    })}
  />
);

export const LineScaleLeftSide4 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 7,
      averageValue: 7,
    })}
    valuePrefix="Senast "
  />
);

export const LineScaleLeftSide5 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 27,
      averageValue: 27,
    })}
    valuePrefix="Senast "
  />
);

export const LineScaleInTheMiddle = () => (
  <LineScale
    {...getLineScaleProps({
      value: 50,
      averageValue: 50,
    })}
    valuePrefix="Senast "
  />
);
export const LineScaleRightSide22 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 77,
      averageValue: 77,
    })}
  />
);
export const LineScaleRightSide23 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 77,
      averageValue: 77,
    })}
    valuePrefix="Senast "
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
export const LineScaleRightSide2 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 94,
      averageValue: 94,
    })}
    valuePrefix="Senast "
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
export const LineScaleAlmostAtRightEdge2 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 99,
      averageValue: 99,
    })}
    valuePrefix="Senast "
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
export const LineScaleAtRightEdge2 = () => (
  <LineScale
    {...getLineScaleProps({
      value: 100,
      averageValue: 100,
    })}
    valuePrefix="Senast "
  />
);
