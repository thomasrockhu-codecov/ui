import React from 'react';
import DoubleDatePicker from './Double';
import SingleDatePicker from './Single';
import { DOUBLE_DATE_PICKER } from './shared/constants';
import { DoubleDatePickerProps, SingleDatePickerProps } from './DatePicker.types';

export function isDoubleDatePicker(
  props: SingleDatePickerProps | DoubleDatePickerProps,
): props is DoubleDatePickerProps {
  return props.variant === DOUBLE_DATE_PICKER;
}

const DatePicker: React.FC<SingleDatePickerProps | DoubleDatePickerProps> = (
  props: SingleDatePickerProps | DoubleDatePickerProps,
) => {
  if (isDoubleDatePicker(props)) {
    return <DoubleDatePicker {...props} />;
  }
  return <SingleDatePicker {...props} />;
};

export default DatePicker;
