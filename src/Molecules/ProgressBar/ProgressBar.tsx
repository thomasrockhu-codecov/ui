import React, { FC } from 'react';
import * as R from 'ramda';
import styled from 'styled-components';

import { Flexbox, Icon, Typography, useMedia } from '../..';
import { Props } from './ProgressBar.types';

const StyledContainer = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['showStepLabels'].includes(prop),
})<{ showStepLabels: boolean | undefined }>`
  width: 100%;
  padding-bottom: ${({ showStepLabels, theme }) => (showStepLabels ? theme.spacing.unit(8) : 0)}px;
`;

const StyledBubble = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['done', 'active'].includes(prop),
})<{ done: boolean; active: boolean }>`
  position: relative;
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing.unit(8)}px;
  height: ${({ theme }) => theme.spacing.unit(8)}px;
  color: ${({ theme }) => theme.color.progressBarText};
  background: ${({ theme, done, active }) => {
    if (done) {
      return theme.color.progressBarDone;
    }
    if (active) {
      return theme.color.progressBarActive;
    }
    return theme.color.progressBarNext;
  }};
`;

const StyledTypography = styled(Typography)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  white-space: nowrap;
`;

const StyledLine = styled.div<{ done: boolean }>`
  width: 100%;
  height: ${({ theme }) => theme.spacing.unit(0.5)}px;
  background: ${({ theme, done }) =>
    done ? theme.color.progressBarDone : theme.color.progressBarNext};
`;

const ProgressBar: FC<Props> = ({ numberOfSteps, currentStep, stepLabels }) => {
  const isDesktop = useMedia(t => t.media.greaterThan(t.breakpoints.sm)) || false;
  const showStepLabels = isDesktop && stepLabels && stepLabels.length > 0;

  const stepBubble = (stepNumber: number) => {
    const stepDone = stepNumber < currentStep;
    const stepActive = stepNumber === currentStep;

    const titleProgress = () => {
      if (stepDone) {
        return 'step done';
      }
      if (stepActive) {
        return 'active step';
      }
      return 'step not done';
    };

    const title = `${
      stepLabels ? stepLabels[stepNumber - 1] : stepNumber.toString()
    } - ${titleProgress()}`;

    return (
      <React.Fragment key={stepNumber}>
        <StyledBubble
          container
          item
          shrink={0}
          alignItems="center"
          justifyContent="center"
          done={stepDone}
          active={stepActive}
          title={title}
        >
          <Typography type="secondary" color={t => t.color.textLight} aria-hidden>
            {stepDone ? <Icon.CheckMark color={t => t.color.textLight} size={4} /> : stepNumber}
          </Typography>
          {showStepLabels && (
            <StyledTypography
              type="secondary"
              weight={stepActive ? 'bold' : 'regular'}
              color={t => t.color.text}
              aria-hidden
            >
              {stepLabels && stepLabels[stepNumber - 1]}
            </StyledTypography>
          )}
        </StyledBubble>
        {stepNumber < numberOfSteps && <StyledLine done={stepDone} />}
      </React.Fragment>
    );
  };

  const generateSteps = () => {
    const steps = R.range(1, numberOfSteps + 1);
    return steps.map((step: number) => stepBubble(step));
  };

  return (
    <StyledContainer
      container
      alignItems="center"
      showStepLabels={showStepLabels}
      title="progress bar"
    >
      {generateSteps()}
    </StyledContainer>
  );
};

export default ProgressBar;
