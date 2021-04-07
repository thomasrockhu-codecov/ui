import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Drawer, Input, PersistentTooltip, Typography } from '../..';

export default {
  title: 'Molecules / Persistent Tooltip',
};

export const DefaultStory = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PersistentTooltip
      isOpen={isOpen}
      title="This is persistent tooltip"
      description="The tooltip will not close until the user clicks the close-button – useful for pointing the user's attention somewhere (for instance when showcasing new features)."
      closeButtonTitle="Close by clicking X"
      onClose={() => setIsOpen(false)}
    >
      <Input.Text label="Label" />
    </PersistentTooltip>
  );
};

export const WithMaxWidth = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PersistentTooltip
      isOpen={isOpen}
      title="This is persistent tooltip"
      description="The tooltip will not close until the user clicks the close-button – useful for pointing the user's attention somewhere (for instance when showcasing new features)."
      closeButtonTitle="Close by clicking X"
      onClose={() => setIsOpen(false)}
      maxWidth={30}
    >
      <Input.Text label="Label" />
    </PersistentTooltip>
  );
};

export const WithMaxWidthAuto = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PersistentTooltip
      isOpen={isOpen}
      title="This is persistent tooltip"
      description="The tooltip will not close until the user clicks the close-button – useful for pointing the user's attention somewhere (for instance when showcasing new features)."
      closeButtonTitle="Close by clicking X"
      onClose={() => setIsOpen(false)}
      maxWidth="auto"
    >
      <Input.Text label="Label" />
    </PersistentTooltip>
  );
};

export const CustomTitleAndDescription = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PersistentTooltip
      isOpen={isOpen}
      title={
        <Box mb={4}>
          <Typography color={(t) => t.color.negative}>I&apos;m in a box</Typography>
        </Box>
      }
      description="The max width is not set with a prop for this tooltip. This is the description that is quite long and stuff. Just showing how the tooltip will look if description is really long. I mean really really long."
      closeButtonTitle="Close by clicking X"
      onClose={() => setIsOpen(false)}
    >
      <Input.Text label="Label" />
    </PersistentTooltip>
  );
};

const StyledPersistentTooltip = styled(PersistentTooltip)`
  ${PersistentTooltip.components.CloseButtonIcon} {
    fill: ${(p) => p.theme.color.text};
    width: ${(p) => p.theme.spacing.unit(2)}px;
    height: ${(p) => p.theme.spacing.unit(2)}px;
  }
`;

export const StyledSubcomponents = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledPersistentTooltip
      isOpen={isOpen}
      title={<Typography type="title2">I&apos;m in a box</Typography>}
      description={
        <Typography>
          The max width is set with a prop for this tooltip. Also, it&apos;s subcomponents styled –
          different color, smaller close button.
        </Typography>
      }
      closeButtonTitle="Close by clicking X"
      backgroundColor={(t) => t.color.warning}
      borderColor={(t) => t.color.negative}
      onClose={() => setIsOpen(false)}
    >
      <Input.Text label="Label" />
    </StyledPersistentTooltip>
  );
};

export const DifferentPositions = () => {
  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(true);
  const [openThree, setOpenThree] = useState(true);
  const [openFour, setOpenFour] = useState(true);

  return (
    <>
      <Box mb={40}>
        <PersistentTooltip
          isOpen={openOne}
          title="Different Positions - Right"
          description="This tooltip is positioned on the right"
          closeButtonTitle="Close by clicking X"
          position="right"
          onClose={() => setOpenOne(false)}
        >
          <Input.Text label="Label" />
        </PersistentTooltip>
      </Box>
      <Box mb={40}>
        <PersistentTooltip
          isOpen={openTwo}
          title="Different Positions - Bottom"
          description="This tooltip is positioned on the bottom"
          closeButtonTitle="Close by clicking X"
          position="bottom"
          onClose={() => setOpenTwo(false)}
        >
          <Input.Text label="Label" />
        </PersistentTooltip>
      </Box>
      <Box mb={40}>
        <PersistentTooltip
          isOpen={openThree}
          title="Different Positions - Left"
          description="This tooltip is positioned on the left, as you can see it's still positioned on the right. This is because it's dynamically repositioned. It does not fit  on left side of target."
          closeButtonTitle="Close by clicking X"
          position="left"
          onClose={() => setOpenThree(false)}
        >
          <Input.Text label="Label" />
        </PersistentTooltip>
      </Box>
      <Box mb={40}>
        <PersistentTooltip
          isOpen={openFour}
          title="Different Positions - Top"
          description="This tooltip is positioned on the top"
          closeButtonTitle="Close by clicking X"
          position="top"
          onClose={() => setOpenFour(false)}
        >
          <Input.Text label="Label" />
        </PersistentTooltip>
      </Box>
    </>
  );
};

export const PersistentTooltipInDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      onAnimationComplete={() => {
        setIsOpen(true);
      }}
      preventOnClickOutsideDataAttributes={['data-specific-drawer-prevent-click-outside']}
    >
      <PersistentTooltip
        isOpen={isOpen}
        title="This is persistent tooltip"
        description="The tooltip will not close until the user clicks the close-button – useful for pointing the user's attention somewhere (for instance when showcasing new features)."
        closeButtonTitle="Close by clicking X"
        onClose={() => setIsOpen(false)}
        data-specific-drawer-prevent-click-outside
      >
        <Input.Text label="Label" />
      </PersistentTooltip>
    </Drawer>
  );
};
