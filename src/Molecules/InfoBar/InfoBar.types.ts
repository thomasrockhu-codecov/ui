export type Props = {
  className?: string;
  /** @default general */
  variant?: 'error' | 'success' | 'warning' | 'general';
  onClose?: () => void;
};
