import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusModal } from '../..';
import { Status } from './StatusModal.types';

const loadingOptions = {
  title: 'Modal title for loading',
  text: 'Modal text for loading',
  textConfirm: 'Modal text for loading',
};

const succesOptions = {
  status: 'SUCCESS' as Status,
  title: 'Modal title for success',
  text: 'Modal text for success',
  textConfirm: 'Modal text for success',
};

const errorOptions = {
  status: 'ERROR' as Status,
  title: 'Modal title for error',
  text: 'Modal text for error',
  textConfirm: 'Modal text for error',
};

const warningOptions = {
  status: 'WARNING' as Status,
  title: 'Modal title for warning',
  text: 'Modal text for warning',
  textConfirm: 'Modal text for warning',
};

const twoButtonsOptions = {
  status: 'SUCCESS' as Status,
  title: 'Modal title for two buttons',
  text: 'Modal text for two buttons',
  textConfirm: 'Ok',
  textCancel: 'Cancel',
};

const defaultProps = { id: 'status-modal', onClose: () => {} };

storiesOf('Organisms / StatusModal', module)
  .addDecorator((storyFn) => storyFn())
  .add('Loading', () => <StatusModal {...defaultProps} loading options={loadingOptions} />)
  .add('Success', () => <StatusModal {...defaultProps} loading={false} options={succesOptions} />)
  .add('Warning', () => <StatusModal {...defaultProps} loading={false} options={warningOptions} />)
  .add('Error', () => <StatusModal {...defaultProps} loading={false} options={errorOptions} />)
  .add('With two buttons', () => (
    <StatusModal {...defaultProps} loading={false} options={twoButtonsOptions} />
  ));
