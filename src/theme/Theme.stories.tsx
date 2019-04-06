import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import theme from '.';

import { Display } from '../common/Display';

const Color = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${p => p.color};
  border: 1px solid #eee;
`;
storiesOf('Theme', module)
  .add('Colors', () => (
    <Display
      items={Object.entries(theme.color).map(([title, color]) => ({
        title,
        component: <Color color={color} />,
      }))}
    />
  ))
  .add('Screen sizes', () => (
    <Display
      items={Object.entries(theme.size).map(([title, size]) => ({
        title,
        component: <pre>{size}</pre>,
      }))}
    />
  ));
