import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StatusModal, Icon } from '../..';

const onClose = action('close modal');

const options = {
  CASE_1: {
    title: 'Modal title for "With All"',
    text: 'Modal text for "With All"',
    icon: <Icon.InfoCircle color={(t) => t.color.cta} size={23} />,
  },
  ERROR: {
    title: 'Modal title for error',
    text: 'Modal text for error',
    icon: <Icon.CrossCircle color={(t) => t.color.negative} size={23} />,
  },
  WARNING: {
    title: 'Modal title for warning',
    text: 'Modal text for warning',
    icon: <Icon.WarningTriangle color={(t) => t.color.warning} size={23} />,
  },
  SUCCESS: {
    title: 'Modal title for success',
    text: 'Modal text for success',
    icon: <Icon.CheckMarkCircle color={(t) => t.color.positive} size={23} />,
  },
};

const defaultProps = { id: 'status-modal', onClose, buttonText: 'Button text' };

storiesOf('Molecules / StatusModal', module)
  .addDecorator((storyFn) => storyFn())
  .add('Loading', () => <StatusModal {...defaultProps} loading />)
  .add('With all', () => <StatusModal {...defaultProps} status="CASE_1" options={options} />)
  .add('Success', () => (
    <StatusModal {...defaultProps} status="SUCCESS" options={options} />
  ))
  .add('Warning', () => (
    <StatusModal {...defaultProps} status="WARNING" options={options} />
  ))
  .add('Error', () => (
    <StatusModal {...defaultProps} status="ERROR" options={options} />
  ));
