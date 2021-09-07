export type Props = {
  id: string;
  locale: string;
  viewedDate: Date;
  onChange: (index: number) => void;
  fullscreenMode?: boolean;
  selectMonthLabel?: string;
};
