export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onClick: (date: Date) => void;
  selectedStartDate: Date;
  selectedEndDate?: Date;
  onMonthChange: (index: number) => void;
};
