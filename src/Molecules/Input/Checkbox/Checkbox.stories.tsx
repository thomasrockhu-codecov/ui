import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions, action } from '@storybook/addon-actions';
import { Input } from '../../..';
import { Display } from '../../../common/Display';

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
    <>
      <Input.Checkbox name="example1" value="green" label="Green" />
      <Input.Checkbox name="example1" value="blue" label="Blue" />
      <Input.Checkbox name="example1" value="yellow" label="Yellow" />
    </>
  ))
  .add('With default checked', () => (
    <>
      <Input.Checkbox name="example2" value="green" label="Green" defaultChecked />
      <Input.Checkbox name="example2" value="blue" label="Blue" defaultChecked />
      <Input.Checkbox name="example2" value="yellow" label="Yellow" />
    </>
  ))
  .add('Required', () => (
    <>
      <Input.Checkbox name="example3" value="green" label="Green" required />
      <Input.Checkbox name="example3" value="blue" label="Blue" required />
    </>
  ))
  .add('Disabled', () => <Input.Checkbox defaultValue="152.25" disabled />)
  .add('With auto focus', () => <Input.Checkbox defaultValue="152.25" autoFocus />)
  .add('With all actions', () => <Input.Checkbox {...handlers} />)
  .add('With error if value is less than 1', () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = React.useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <Input.Checkbox
          step="1"
          defaultValue={defaultValue}
          onChange={x => x && setValue(x)}
          {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
        />
      );
    };
    return <Component />;
  })
  .add('With success', () => <Input.Checkbox success />);
