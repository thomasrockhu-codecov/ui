import { StepBaseProps } from '../MultiStepProgress.types';
import { A11yProps } from '../Status/Status.types';

export type StepLevelTwoProps = StepBaseProps;

export type Props = {
  onStepClick?: (stepName: string) => void;
  steps: StepLevelTwoProps[];
};

export type LevelTwoComponent = React.FC<Props & A11yProps>;
