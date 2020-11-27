import React from 'react';
import DoubleDatePicker from './Double';
import DatePicker from './Single';
import { DOUBLE_DATE_PICKER } from './shared/constants';
import { SingleDatePickerProps, DoubleDatePickerProps } from './DatePicker.types';

export function isDoubleDatePicker(
  props: SingleDatePickerProps | DoubleDatePickerProps,
): props is DoubleDatePickerProps {
  return props.variant === DOUBLE_DATE_PICKER;
}

const DatePickerComponent = (props: SingleDatePickerProps | DoubleDatePickerProps) => {
  if (isDoubleDatePicker(props)) {
    return <DoubleDatePicker {...props} />;
  }
  return <DatePicker {...props} />;
};

export default DatePickerComponent;
