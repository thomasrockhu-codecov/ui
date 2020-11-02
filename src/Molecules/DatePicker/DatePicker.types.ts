import { REGULAR_DATE_PICKER, RANGE_DATE_PICKER, DOUBLE_DATE_PICKER } from './shared/constants';

type DatePickerVariant =
  | typeof REGULAR_DATE_PICKER
  | typeof RANGE_DATE_PICKER
  | typeof DOUBLE_DATE_PICKER;

export type Props = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  onChange?: (date: Date) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedDate?: Date;
  selectedEndDate?: Date;
  variant?: DatePickerVariant;
  inputSize?: 's';
  width?: number;
  ref?: React.Ref<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
