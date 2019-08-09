import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from 'color';
import styled from 'styled-components';
import { Input, Icon, Flexbox, Button } from '../..';
import { Display } from '../../common/Display';

storiesOf('Molecules | Input / Text', module)
  .add('Default', () => <Input.Text label="Label" placeholder="Placeholder" />)
  .add('With value (Controlled behaviour)', () => (
    <Input.Text label="Label" placeholder="Placeholder" value="Some predefined text" />
  ))
  .add('With default value (Uncontrolled behaviour)', () => (
    <Input.Text label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
  ))
  .add('Error if empty text', () => {
    const Component = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input.Text
          label="My awesome text field"
          placeholder="This is a placeholder"
          onChange={e => setValue(e.target.value)}
          {...(value === '' ? { error: 'Something went wrong' } : {})}
        />
      );
    };
    return <Component />;
  })
  .add('Success', () => <Input.Text label="Label" placeholder="Placeholder" success />)
  .add('Extra info below', () => (
    <Input.Text label="Label" placeholder="Placeholder" extraInfo="Use wisely this space" />
  ))
  .add('Extra info with error', () => {
    const Component = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input.Text
          label="My awesome text field"
          placeholder="This is a placeholder"
          extraInfo="Use wisely this space"
          onChange={e => setValue(e.target.value)}
          {...(value === '' ? { error: 'Enter text' } : {})}
        />
      );
    };
    return <Component />;
  })

  .add('Edge cases', () => (
    <Display
      items={[
        {
          component: (
            <Input.Text
              label="Too long label, goes into ellipsis. Consider smaller label or bigger input"
              placeholder="If placeholder goes too long though, it probably should be truncated into ellipsis, right?"
              extraInfo="This is much neccessary info wow"
            />
          ),
          title: 'Long values',
        },
        {
          component: (
            <Input.Text
              label="Small label"
              placeholder=""
              extraInfo="Big extra fat extraInfo that will wrap over many lines. Be careful with this pattern, use it only with small texts!"
            />
          ),
          title: 'Long extraInfo',
        },
      ]}
    />
  ))
  .add('Full width', () => (
    <Display
      title="Full width inputs"
      items={[
        {
          component: <Input.Text label="Label" width="100%" placeholder="Placeholder" />,
          title: 'Default',
        },
        {
          component: (
            <Input.Text
              label="Label"
              width="100%"
              placeholder="Placeholder"
              leftAddon={<Icon.Bolt size={4} />}
            />
          ),
          title: 'Left addon',
        },
        {
          component: (
            <Input.Text label="Label" width="100%" placeholder="Placeholder" rightAddon="SEK" />
          ),
          title: 'Right addon',
        },
      ]}
    />
  ))
  .add('Left addon', () => (
    <Input.Text label="Label" placeholder="Placeholder" leftAddon={<Icon.Bolt size={4} />} />
  ))
  .add('Right addon', () => <Input.Text label="Label" placeholder="Placeholder" rightAddon="SEK" />)
  .add('Hidden label', () => <Input.Text label="Label" placeholder="Placeholder" hideLabel />)
  .add('Skip bottom margin (if you know there is no errors or info)', () => {
    const WarningStripe = styled.div`
      width: 200px;
      height: 20px;
      ${p => {
        const stripes = p.theme.color.warning;
        const stripesDark = Color(stripes).lighten(0.5);

        return `
    background: repeating-linear-gradient(
      -45deg,
      ${stripes},
      ${stripes} ${p.theme.spacing.unit(2)}px,
      ${stripesDark} ${p.theme.spacing.unit(2)}px,
      ${stripesDark} ${p.theme.spacing.unit(4)}px
    );
  `;
      }}
    `;
    return (
      <>
        <Input.Text label="Label" placeholder="Placeholder" noBottomMargin />
        <WarningStripe />
      </>
    );
  })
  .add('Simple login form', () => (
    <Flexbox container direction="column" gutter={4}>
      <Flexbox item container gutter={4}>
        <Flexbox item basis="50%">
          <Input.Text
            width="100%"
            label="Username"
            placeholder="Username"
            extraInfo="Please provide your username (worst UX right here)"
          />
        </Flexbox>
        <Flexbox item basis="50%">
          <Input.Text width="100%" label="Password" placeholder="Password" error="Simple error" />
        </Flexbox>
      </Flexbox>
      <Flexbox item container justifyContent="flex-end" grow={1}>
        <Button width="100%">Login</Button>
      </Flexbox>
    </Flexbox>
  ))

  .add('Small', () => (
    <Display
      title={`Size = "s"`}
      items={[
        {
          component: <Input.Text label="Label" size="s" placeholder="Placeholder" />,
          title: 'Default',
        },
        {
          component: <Input.Text label="Label" size="s" width="100%" placeholder="Placeholder" />,
          title: 'Full width',
        },
        {
          component: (
            <Input.Text
              label="Label"
              size="s"
              placeholder="Placeholder"
              error="Some error text that will go to ellipsis"
            />
          ),
          title: 'Error',
        },
        {
          component: (
            <Input.Text
              label="Label"
              size="s"
              placeholder="Placeholder"
              leftAddon={<Icon.Bolt size={4} />}
            />
          ),
          title: 'Left addon',
        },
        {
          component: (
            <Input.Text label="Label" size="s" placeholder="Placeholder" rightAddon="SEK" />
          ),
          title: 'Right addon',
        },
      ]}
    />
  ));
