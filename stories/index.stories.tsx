import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

// import { Text } from '../src/components/text';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Styled div', module).add('with stuff', () => {
  const Button = styled.div`
    background: red;
    height: 100px;
    width: 100%;
    color: white;
    text-align: center;
    font-size: 100px;
    font-family: comic-sans;
  `;
  console.log(Button);

  return <Button>VLAD CASINO</Button>;
});

// storiesOf('Text', module).add('Primary', () => <Text.Primary as="p">Primary</Text.Primary>);
