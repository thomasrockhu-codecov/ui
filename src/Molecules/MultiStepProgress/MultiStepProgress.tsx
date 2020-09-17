import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../Atoms/Card';
import { TopLevel } from './TopLevel';
import { MultiStepProgressComponent, StickyProps } from './MultiStepProgress.types';
import { Drawer, Media, Flexbox, Typography } from '../..';

const StyledDrawer = styled(Drawer)`
  ${Drawer.components.Content} {
    padding: 0;
  }
`;

const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['isSticky', 'stickyTopDistanceUnit'].includes(prop),
})<StickyProps>`
  background: transparent;

  ${({ isSticky, stickyTopDistanceUnit, theme }) =>
    isSticky &&
    `
    position: sticky;
    top: ${stickyTopDistanceUnit ? theme.spacing.unit(stickyTopDistanceUnit) : 0}px;
  `}
`;

export const MultiStepProgress: MultiStepProgressComponent = ({
  onStepClick,
  onSubStepClick,
  steps,
  title = 'Progress',
  titleDone = 'Completed',
  titleNotDone = 'Not completed',
  mobileDrawerTitle = 'Start monthly savings',
  closeDrawerOnStepClick = false,
  isSticky = false,
  stickyTopDistanceUnit = 0,
}) => {
  // TODO: use context to pass these lovely props down the rabbit hole
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const onStepClickDrawerClose = (value: string) => {
    if (closeDrawerOnStepClick) onDrawerClose();
    if (onStepClick) onStepClick(value);
  };

  return (
    <>
      <StyledCard isSticky={isSticky} stickyTopDistanceUnit={stickyTopDistanceUnit}>
        <div role="group" aria-label={title}>
          <TopLevel
            drawerOpen={open}
            onStepClick={onStepClick}
            onSubStepClick={onSubStepClick}
            steps={steps}
            titleDone={titleDone}
            titleNotDone={titleNotDone}
            onMobileStepClick={toggleDrawer}
          />
        </div>
      </StyledCard>

      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        <StyledDrawer
          onClose={onDrawerClose}
          title={
            <Flexbox container gutter={2} alignItems="center">
              <Typography type="title2" as="h2">
                {mobileDrawerTitle}
              </Typography>
            </Flexbox>
          }
          open={open}
        >
          <div role="group" aria-label={title}>
            <TopLevel
              onStepClick={onStepClickDrawerClose}
              onSubStepClick={onSubStepClick}
              steps={steps}
              titleDone={titleDone}
              titleNotDone={titleNotDone}
              isInDrawer
            />
          </div>
        </StyledDrawer>
      </Media>
    </>
  );
};

MultiStepProgress.displayName = 'MultiStepProgress';
