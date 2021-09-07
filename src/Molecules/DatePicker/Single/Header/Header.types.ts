export type Props = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  id: string;
  locale: string;
  viewedDate: Date;
  onMonthChange: (index: number) => void;
  onYearChange: (year: number) => void;
  yearSelectLength?: number;
  fullscreenMode: boolean;
  selectMonthLabel?: string;
  selectYearLabel?: string;
};
