export type EdgeDay = 'FIRST_DAY' | 'LAST_DAY';

export type CalendarDayProps = {
  className?: string;
  date: Date;
  disabled?: boolean;
  enabled?: boolean;
  hover?: boolean;
  locale: any;
  onClick?: (date: Date) => void;
  sameMonth?: boolean;
  selected?: boolean;
  withinRange?: boolean;
  edgeDay: EdgeDay | null;
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
