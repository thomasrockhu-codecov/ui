import { InModal, Position } from 'common/PopOver/PopOver.types';
import { MeasureElementWidth } from '../FlexTable/shared/shared.types';

export type Props = {
  label: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  /** @default bottom */
  position?: Position;
  /** Adjusts z-index when used inside Modal */
  inModal?: InModal;
  /** max-width in units */
  maxWidth?: number;
  mode?: 'hover' | 'click';
  openDelay?: number;
  closeDelay?: number;
  isOpen?: boolean;
  measureFullWidth?: MeasureElementWidth;
  /**
   * @wrapChild
   * Wraps children with a span DOM element.
   * Useful for when children does not handle refs correctly. Could fix positioning issues.
   */
  wrapChild?: boolean;
};

export type TooltipComponent = React.FC<Props>;
