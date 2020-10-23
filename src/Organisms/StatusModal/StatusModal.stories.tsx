import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusModal } from '../..';

const succesOptions = {
  status: 'SUCCESS',
  title: 'Modal title for success',
  text: 'Modal text for success',
  textConfirm: 'Modal text for success',
};

const errorOptions = {
  status: 'ERROR',
  title: 'Modal title for error',
  text: 'Modal text for error',
  textConfirm: 'Modal text for error',
};

const warningOptions = {
  status: 'WARNING',
  title: 'Modal title for warning',
  text: 'Modal text for warning',
  textConfirm: 'Modal text for warning',
};

const twoButtonsOptions = {
  status: 'SUCCESS',
  title: 'Modal title for success',
  text: 'Modal text for success',
  textConfirm: 'Ok',
  textCancel: 'Cancel',
};

const defaultProps = { id: 'status-modal', onClose: () => {} };

storiesOf('Organisms / StatusModal', module)
  .addDecorator((storyFn) => storyFn())
  .add('Loading', () => <StatusModal {...defaultProps} loading options={null} />)
  .add('Success', () => <StatusModal {...defaultProps} loading={false} options={succesOptions} />)
  .add('Warning', () => <StatusModal {...defaultProps} loading={false} options={warningOptions} />)
  .add('Error', () => <StatusModal {...defaultProps} loading={false} options={errorOptions} />)
  .add('With two buttons', () => (
    <StatusModal {...defaultProps} loading={false} options={twoButtonsOptions} />
  ));
