import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../..';
import { Display } from '../../common/Display';

storiesOf('Atoms | Text', module)
  .add('Primary', () => (
    <Display
      items={[
        { title: 'Primary text', component: <Text.Primary>Primary text</Text.Primary> },
        {
          title: 'Primary bold text',
          component: <Text.Primary weight="bold">Primary bold text</Text.Primary>,
        },
        {
          title: 'Primary extrabold text',
          component: <Text.Primary weight="extrabold">Primary extrabold text</Text.Primary>,
        },
      ]}
    />
  ))
  .add('Secondary', () => (
    <Display
      items={[
        { title: 'Secondary text', component: <Text.Secondary>Secondary text</Text.Secondary> },
        {
          title: 'Secondary bold text',
          component: <Text.Secondary weight="bold">Secondary bold text</Text.Secondary>,
        },
        {
          title: 'Secondary extrabold text',
          component: <Text.Secondary weight="extrabold">Secondary extrabold text</Text.Secondary>,
        },
      ]}
    />
  ))
  .add('Tertiary', () => (
    <Display
      items={[
        { title: 'Tertiary text', component: <Text.Tertiary>Tertiary text</Text.Tertiary> },
        {
          title: 'Tertiary bold text',
          component: <Text.Tertiary weight="bold">Tertiary bold text</Text.Tertiary>,
        },
        {
          title: 'Tertiary extrabold text',
          component: <Text.Tertiary weight="extrabold">Tertiary extrabold text</Text.Tertiary>,
        },
      ]}
    />
  ))
  .add('Title1', () => <Text.Title1>Title1 text</Text.Title1>)
  .add('Title3', () => <Text.Title3>Title3 text</Text.Title3>)
  .add('Colors', () => (
    <Display
      items={[
        { title: 'Default', component: <Text.Primary>Default</Text.Primary> },
        {
          title: 'Color: text',
          component: <Text.Primary color={t => t.color.text}>Text</Text.Primary>,
        },
        {
          title: 'Color: positive',
          component: <Text.Primary color={t => t.color.positive}>Positive</Text.Primary>,
        },
        {
          title: 'Color: negative',
          component: <Text.Primary color={t => t.color.negative}>Negative</Text.Primary>,
        },
        {
          title: 'Color: warning',
          component: <Text.Primary color={t => t.color.warning}>Warning</Text.Primary>,
        },
        {
          title: 'Color: cta',
          component: <Text.Primary color={t => t.color.cta}>CTA</Text.Primary>,
        },
        {
          title: 'Color: label',
          component: <Text.Primary color={t => t.color.label}>Label</Text.Primary>,
        },
      ]}
    />
  ));
