import { StepBaseProps } from '../MultiStepProgress.types';

type InheritedProps = Pick<StepBaseProps, 'current' | 'done'>;

export type A11yProps = {
  /** Visible on completed steps */
  titleDone: string;
  /** Visible on non completed steps */
  titleNotDone: string;
};

export type InternalProps = {
  $current?: boolean;
};

type Props = { noIcons?: boolean; number?: number } & InheritedProps & A11yProps;

export type StatusComponent = React.FC<Props>;
