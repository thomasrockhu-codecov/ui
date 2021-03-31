import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Input, Typography } from '../..';

import { PersistentTooltip } from './PersistentTooltip';

export default {
  title: 'Molecules / Persistent Tooltip',
};

export const DefaultStory = () => {
  const [open, setOpen] = useState(true);

  return (
    <PersistentTooltip
      open={open}
      title="This is persistent tooltip"
      description="The tooltip will not close until the user clicks the close-button – useful for pointing the user's attention somewhere (for instance when showcasing new features)."
      closeButtonTitle="Close by clicking X"
      onClose={() => setOpen(false)}
      maxWidth={120}
    >
      <Input.Text label="Label" />
    </PersistentTooltip>
  );
};

export const CustomTitleAndDescription = () => {
  const [open, setOpen] = useState(true);

  return (
    <PersistentTooltip
      open={open}
      title={
        <Box mb={4}>
          <Typography color={(t) => t.color.negative}>I&apos;m in a box</Typography>
        </Box>
      }
      description="The max width is not set with a prop for this tooltip. This is the description that is quite long and stuff. Just showing how the tooltip will look if description is really long. I mean really really long."
      closeButtonTitle="Close by clicking X"
      onClose={() => setOpen(false)}
    >
      <Input.Text label="Label" />
    </PersistentTooltip>
  );
};

const StyledPersistentTooltip = styled(PersistentTooltip)`
  ${PersistentTooltip.components.TooltipContent} {
    background: ${(p) => p.theme.color.warning};
    border-bottom-color: ${(p) => p.theme.color.backgroundDark};
  }
  ${PersistentTooltip.components.TooltipArrow} {
    &:before {
      border-bottom-color: ${(p) => p.theme.color.warning};
    }
    &:after {
      border-bottom-color: ${(p) => p.theme.color.warning};
    }
  }
  ${PersistentTooltip.components.CloseButtonIcon} {
    fill: ${(p) => p.theme.color.text};
    width: ${(p) => p.theme.spacing.unit(2)}px;
    height: ${(p) => p.theme.spacing.unit(2)}px;
  }
`;

export const StyledSubcomponents = () => {
  const [open, setOpen] = useState(true);

  return (
    <StyledPersistentTooltip
      open={open}
      title={<Typography type="title2">I&apos;m in a box</Typography>}
      description={
        <Typography>
          The max width is set with a prop for this tooltip. Also, it&apos;s subcomponents styled –
          different color, smaller close button.
        </Typography>
      }
      maxWidth={79}
      closeButtonTitle="Close by clicking X"
      onClose={() => setOpen(false)}
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
          open={openOne}
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
          open={openTwo}
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
          open={openThree}
          title="Different Positions - Left"
          description="This tooltip is positioned on the left, as you can see it's still positioned on the right. This is because it's dynamically repositioned. It does not fit  on left side of target."
          closeButtonTitle="Close by clicking X"
          position="left"
          maxWidth={79}
          onClose={() => setOpenThree(false)}
        >
          <Input.Text label="Label" />
        </PersistentTooltip>
      </Box>
      <Box mb={40}>
        <PersistentTooltip
          open={openFour}
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
