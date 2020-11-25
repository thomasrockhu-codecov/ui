export type Props = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  onChange?: (date: Date, endDate?: Date | null) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedStartDate?: Date;
  selectedEndDate?: Date;
  inputValueStart?: string;
  inputValueEnd?: string;
  inputSize?: 's';
  width?: number;
  ref?: React.Ref<HTMLDivElement>;
  yearSelectLength?: number;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
