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
  isWithinRange?: boolean;
  isFirstDay?: boolean;
  isLastDay?: boolean;
};

type FocusedState = [number | null, number | null];

export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onClick: (date: Date) => void;
  selectedDate: Date;
  selectedEndDate?: Date;
  focusedState: [FocusedState, React.Dispatch<React.SetStateAction<FocusedState>>];
  setViewedDate: (date: Date) => void;
};
