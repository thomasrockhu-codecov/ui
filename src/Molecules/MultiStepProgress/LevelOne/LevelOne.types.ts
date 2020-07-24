import { StepLevelTwoProps } from '../LevelTwo/LevelTwo.types';
import { A11yProps } from '../Status/Status.types';
import { StepBaseProps } from '../MultiStepProgress.types';

export type InternalProps = {
  $current?: boolean;
};

export type StepLevelOneProps = {
  steps?: StepLevelTwoProps[];
} & StepBaseProps;

type Props = {
  onStepClick?: (stepName: string) => void;
  onSubStepClick?: (stepName: string) => void;
  steps?: StepLevelOneProps[];
};

export type LevelOneComponent = React.FC<Props & A11yProps>;
