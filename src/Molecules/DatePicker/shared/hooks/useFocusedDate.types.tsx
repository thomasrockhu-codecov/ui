import { CalendarType } from '../dateUtils';

export type Props = {
  calendarRef: React.RefObject<HTMLElement>;
  viewedDate: Date;
  calendar: CalendarType;
  onMonthChange: (index: number) => void;
  dateIsDisabled: (date: Date | null) => boolean | undefined | null;
  onSelectDate: (date: Date) => void;
};
