export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onClick: (date: Date) => void;
  selectedStartDate: Date;
  selectedEndDate?: Date;
  controlledFocus: boolean;
  setViewedDate: (date: Date) => void;
};
