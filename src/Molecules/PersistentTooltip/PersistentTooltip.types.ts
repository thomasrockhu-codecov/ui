import { ColorFn } from 'common/Types';

export type Props = {
  backgroundColor?: ColorFn;
  borderColor?: ColorFn;
  borderBottomColor?: ColorFn;
  children?: React.ReactNode;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
  positionCallback?: (calulatedPostion: 'top' | 'right' | 'bottom' | 'left') => void;
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description: React.ReactNode;
  closeButtonTitle: string;
  maxWidth?: number;
};
