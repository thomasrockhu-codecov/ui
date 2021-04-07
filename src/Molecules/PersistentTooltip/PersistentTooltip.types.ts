import { Props as PopOverProps } from '../../common/PopOver/PopOver.types';

export type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description: React.ReactNode;
  closeButtonTitle: string;
  maxWidth?: number | 'auto';
} & Pick<
  PopOverProps,
  | 'id'
  | 'position'
  | 'positionCallback'
  | 'backgroundColor'
  | 'borderColor'
  | 'ariaLabel'
  | 'inModal'
>;
