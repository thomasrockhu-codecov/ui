import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Input, Fieldset, Legend, Flexbox } from '../../..';

const handlers = actions(
  'onBlur',
  'onClick',
  'onFocus',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onChange',
);

storiesOf('Molecules | Input / Checkbox', module)
  .add('Default', () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Flexbox container gutter={5}>
        <Input.Checkbox name="example1" value="green" label="Green" />
        <Input.Checkbox name="example1" value="blue" label="Blue" />
        <Input.Checkbox name="example1" value="yellow" label="Yellow" />
      </Flexbox>
    </Fieldset>
  ))
  .add('With default checked', () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Input.Checkbox name="example2" value="green" label="Green" defaultChecked />
      <Input.Checkbox name="example2" value="blue" label="Blue" defaultChecked />
      <Input.Checkbox name="example2" value="yellow" label="Yellow" />
    </Fieldset>
  ))
  .add('Required', () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Input.Checkbox name="example3" value="green" label="Green" required />
      <Input.Checkbox name="example3" value="blue" label="Blue" required />
    </Fieldset>
  ))
  .add('Disabled', () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Input.Checkbox name="example4" value="green" label="Green" defaultChecked disabled />
      <Input.Checkbox name="example4" value="blue" label="Blue" disabled />
    </Fieldset>
  ))
  .add('With auto focus', () => (
    <Input.Checkbox name="example5" value="green" label="Green" autoFocus />
  ))
  .add('With all actions', () => (
    <Input.Checkbox name="example6" value="green" label="Green" {...handlers} />
  ))
  .add('With error', () => (
    <Input.Checkbox name="example6" value="green" label="Green" error="Error message" />
  ))
  .add('With success', () => (
    <Input.Checkbox name="example3" value="green" label="Green" success />
  ));
