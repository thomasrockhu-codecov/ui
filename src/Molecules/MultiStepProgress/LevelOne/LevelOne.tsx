import React from 'react';
import styled from 'styled-components';
import Box from '../../../Atoms/Box';
import Button from '../../Button';
import Typography from '../../../Atoms/Typography';
import { InternalProps, LevelOneComponent } from './LevelOne.types';
import { LevelTwo } from '../LevelTwo';
import Status from '../Status';
import {
  listReset,
  HORIZONTAL_PADDING,
  HORIZONTAL_PADDING_DESKTOP,
  SPACE_TO_STEP_NUMBER,
  STEP_NUMBER_SIZE,
  VERTICAL_PADDING,
} from '../constants';

const OrderedList = styled.ol`
  ${listReset}
`;

const ListItem = styled.li<InternalProps>`
  display: block;
  position: relative;

  &::before {
    content: '';
    display: block;
    background: ${p => p.theme.color.cta};
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.16s ease-out;
    opacity: ${p => (p.$current ? 1 : 0)};
  }

  & + & {
    border-top: ${p => p.theme.spacing.unit(2)}px solid ${p => p.theme.color.divider};
  }
`;

const Content = styled(Box)`
  position: relative;
`;

const StyledButton = styled(Button)`
  justify-content: flex-start;
`;

export const LevelOne: LevelOneComponent = ({
  onStepClick,
  onSubStepClick,
  steps = [],
  titleDone,
  titleNotDone,
}) => {
  const contentLeftPadding = HORIZONTAL_PADDING + STEP_NUMBER_SIZE + SPACE_TO_STEP_NUMBER;
  const contentLeftPaddingDesktop =
    HORIZONTAL_PADDING_DESKTOP + STEP_NUMBER_SIZE + SPACE_TO_STEP_NUMBER;

  return (
    <OrderedList>
      {steps.map((step, i) => {
        const { current, done, label, name, steps: substeps = [] } = step;
        const number = i + 1;

        return (
          <ListItem key={label} $current={current}>
            {current || done ? (
              <StyledButton
                onClick={() => onStepClick && onStepClick(name)}
                variant="neutral"
                fullWidth
              >
                <Typography type="primary" weight={current ? 'bold' : 'regular'}>
                  <Content
                    py={VERTICAL_PADDING}
                    pr={HORIZONTAL_PADDING}
                    pl={contentLeftPadding}
                    sm={{ pl: contentLeftPaddingDesktop, pr: HORIZONTAL_PADDING_DESKTOP }}
                  >
                    <Status
                      current={current}
                      done={done}
                      number={number}
                      titleDone={titleDone}
                      titleNotDone={titleNotDone}
                    />
                    {label}
                  </Content>
                </Typography>
              </StyledButton>
            ) : (
              <>
                <Typography color={t => t.color.disabledText} type="primary">
                  <Content
                    py={VERTICAL_PADDING}
                    pr={HORIZONTAL_PADDING}
                    pl={contentLeftPadding}
                    sm={{ pl: contentLeftPaddingDesktop }}
                  >
                    <Status
                      current={current}
                      done={done}
                      number={number}
                      titleDone={titleDone}
                      titleNotDone={titleNotDone}
                    />
                    {label}
                  </Content>
                </Typography>
              </>
            )}
            {substeps.length > 0 && current && (
              <LevelTwo
                onStepClick={onSubStepClick}
                steps={substeps}
                titleDone={titleDone}
                titleNotDone={titleNotDone}
              />
            )}
          </ListItem>
        );
      })}
    </OrderedList>
  );
};
