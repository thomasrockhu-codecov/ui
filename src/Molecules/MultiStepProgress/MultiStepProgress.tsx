import React from 'react';
import Card from '../../Atoms/Card';
import { LevelOne } from './LevelOne';
import { MultiStepProgressComponent } from './MultiStepProgress.types';

const MultiStepProgress: MultiStepProgressComponent = ({
  onStepClick,
  onSubStepClick,
  steps,
  title = 'Progress',
  titleDone = 'Completed',
  titleNotDone = 'Not completed',
}) => {
  return (
    <Card>
      <div role="group" aria-label={title}>
        <LevelOne
          onStepClick={onStepClick}
          onSubStepClick={onSubStepClick}
          steps={steps}
          titleDone={titleDone}
          titleNotDone={titleNotDone}
        />
      </div>
    </Card>
  );
};

export default MultiStepProgress;
