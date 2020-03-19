import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { InfoBar } from '.';
import { Props } from './InfoBar.types';

const WrappedInfoBar: React.FC<Props> = ({ variant, children, onClose }) => (
  <BrowserRouter>
    <InfoBar onClose={onClose} variant={variant}>
      {children}
    </InfoBar>
  </BrowserRouter>
);

storiesOf('Webapp Next | InfoBar', module)
  .add('Default', () => (
    <WrappedInfoBar>
      We’re currently working on the new main menu. Links marked with arrow icon will redirect you
      to the previous website experience. <a href="#nonce">Read more</a>
    </WrappedInfoBar>
  ))
  .add('Default with onClose', () => (
    <WrappedInfoBar onClose={() => alert('Clicked close')}>
      We’re currently working on the new main menu. Links marked with arrow icon will redirect you
      to the previous website experience. <a href="#nonce">Read more</a>
    </WrappedInfoBar>
  ))
  .add('General', () => (
    <WrappedInfoBar variant="general" onClose={() => alert('Clicked close')}>
      We’re currently working on the new main menu. Links marked with arrow icon will redirect you
      to the previous website experience. <a href="#nonce">Read more</a>
    </WrappedInfoBar>
  ))
  .add('Warning', () => (
    <WrappedInfoBar variant="warning" onClose={() => alert('Clicked close')}>
      We’re currently working on the new main menu. Links marked with arrow icon will redirect you
      to the previous website experience. <a href="#nonce">Read more</a>
    </WrappedInfoBar>
  ))
  .add('Error', () => (
    <WrappedInfoBar variant="error" onClose={() => alert('Clicked close')}>
      The US market is currently down, we are fixing it right now. It will soon be back and running.{' '}
      <a href="#nonce">Read more</a>
    </WrappedInfoBar>
  ))
  .add('Success', () => (
    <WrappedInfoBar variant="success" onClose={() => alert('Clicked close')}>
      We have fixed the US market issue. It is now back to service. <a href="#nonce">Read more</a>
    </WrappedInfoBar>
  ));
