export type EdgeDay = 'FIRST_DAY' | 'LAST_DAY';

export type CalendarDayProps = {
  className?: string;
  date: Date;
  disabled?: boolean;
  enabled?: boolean;
  locale: any;
  onClick?: (date: Date) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onFocus: () => void;
  sameMonth?: boolean;
  selected?: boolean;
  withinRange?: boolean;
  isFirstDay?: boolean;
  isLastDay?: boolean;
};

export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onClick: (date: Date) => void;
  selectedDate: Date;
  selectedEndDate?: Date;
};
