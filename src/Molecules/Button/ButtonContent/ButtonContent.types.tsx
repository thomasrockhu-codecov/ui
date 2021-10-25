import { Theme } from '../../../theme/theme.types';

type Colors = Theme['color'];
type ColorFn = (t: Theme) => Colors['cta'] | Colors['negative'];

export type ButtonContentProps = {
  colorFn?: ColorFn;
  delayLoadingSpinnerAnimation?: boolean;
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
  loading?: boolean;
  pill?: boolean;
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary' | 'neutral';
};

export type ButtonContentComponent = React.FC<ButtonContentProps>;
