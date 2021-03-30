export type Props = {
  children?: React.ReactNode;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
  open: boolean;
  onClose: () => void;
};
