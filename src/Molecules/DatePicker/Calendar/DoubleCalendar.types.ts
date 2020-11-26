type FocusedState = [number | null, number | null];

export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onClick: (date: Date) => void;
  selectedStartDate: Date;
  selectedEndDate?: Date;
  focusedState: [FocusedState, React.Dispatch<React.SetStateAction<FocusedState>>];
  setViewedDate: (date: Date) => void;
};
