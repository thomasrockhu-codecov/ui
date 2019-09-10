import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Input, Fieldset, Legend, Flexbox } from '../../..';
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
  .add('Default', () => <Input.Checkbox name="example" value="green" label="Green" />)
  .add('With default checked', () => (
    <Input.Checkbox name="example" value="green" label="Green" defaultChecked />
  ))
  .add('With default checked', () => (
    <Input.Checkbox name="example" value="green" label="Green" defaultChecked />
  ))
  .add('With checked (Controlled behaviour)', () => {
    const Component = () => {
      const [checked, setChecked] = React.useState(false);
      const toggleCheckbox = () => setChecked(!checked);

      return (
        <>
          <Input.Checkbox
            name="example"
            value="green"
            label="Green"
            checked={checked}
            onChange={toggleCheckbox}
          />
          <button type="button" onClick={toggleCheckbox}>
            Toggle Checkbox
          </button>
        </>
      );
    };
    return <Component />;
  })
  .add('In a group', () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Flexbox container gutter={5}>
        <Input.Checkbox name="example" value="green" label="Green" />
        <Input.Checkbox name="example" value="blue" label="Blue" />
        <Input.Checkbox name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </Fieldset>
  ))
  .add('Required', () => <Input.Checkbox name="example" value="green" label="Green" required />)
  .add('Disabled', () => (
    <Display
      title="Disabled"
      items={[
        {
          component: (
            <Input.Checkbox name="example" value="green" label="Green" defaultChecked disabled />
          ),
          title: 'Checked',
        },
        {
          component: <Input.Checkbox name="example" value="blue" label="Blue" disabled />,
          title: 'Not Checked',
        },
      ]}
    />
  ))
  .add('With auto focus', () => (
    <Input.Checkbox name="example" value="green" label="Green" autoFocus />
  ))
  .add('With all actions', () => (
    <Input.Checkbox name="example6" value="green" label="Green" {...handlers} />
  ));
