import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Flexbox, FormField } from '../..';

storiesOf('Molecules | FormField', module)
  .add('Default', () => (
    <FormField label="Label" forId="unique-id-1">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('With group of items', () => (
    <FormField label="Caption to a group of items" forId="unique-id-1" group>
      <Flexbox container gutter={5}>
        <Flexbox item>
          <div style={{ background: 'aqua' }}>Pass in any children you want</div>
        </Flexbox>
        <Flexbox item>
          <div style={{ background: 'aqua' }}>Pass in any children you want</div>
        </Flexbox>
      </Flexbox>
    </FormField>
  ))
  .add('Required', () => (
    <FormField label="Label" forId="unique-id-1" required showRequired>
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('Required with no star', () => (
    <FormField label="Label" forId="unique-id-1" required>
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('Error', () => (
    <FormField label="Label" error="error" forId="unique-id-2">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('Extra info', () => (
    <FormField label="Label" extraInfo="Some extra info" forId="unique-id-2">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ));
