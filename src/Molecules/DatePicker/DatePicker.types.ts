import { Props as SingleDatePickerProps } from './Single/DatePicker.types';
import { Props as DoubleDatePickerProps } from './Double/DoubleDatePicker.types';

export { SingleDatePickerProps, DoubleDatePickerProps };

export type DatePickerComponentType =
  | React.FC<SingleDatePickerProps>
  | React.FC<DoubleDatePickerProps>;

export type DatePickerComponent = React.FC<SingleDatePickerProps | DoubleDatePickerProps>;
