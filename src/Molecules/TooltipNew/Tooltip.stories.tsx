import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Modal, Drawer, Flexbox } from '../..';
import Tooltip from '.';
import OldTooltip from '../Tooltip';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / TooltipNew',
  parameters: {
    component: Tooltip,
  },
};

const label = 'Information in a Tooltip should not be vital for the user to complete a task';

const Button = styled.button`
  display: block;
`;

const StyledTooltip = styled(Tooltip)`
  background: red;
`;

export const defaultStory = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <Flexbox container justifyContent="flex-end">
      <StyledTooltip label={label} position="left">
        <Button type="button">Hover me</Button>
      </StyledTooltip>
    </Flexbox>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <Flexbox container justifyContent="flex-end">
      <StyledTooltip label={label} position="left">
        <span>Touch me</span>
      </StyledTooltip>
    </Flexbox>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <Flexbox container justifyContent="flex-start">
      <Tooltip label={label} position="right">
        <Button type="button">Hover me</Button>
      </Tooltip>
    </Flexbox>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <Flexbox container justifyContent="center">
      <Tooltip label={label} position="top">
        <Button type="button">Hover me</Button>
      </Tooltip>
    </Flexbox>
    <Flexbox container justifyContent="center">
      <OldTooltip label={label} position="top">
        <Button type="button">Old tooltip hover me</Button>
      </OldTooltip>
    </Flexbox>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <Tooltip label={label}>
      <Button type="button">Hover me</Button>
    </Tooltip>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <h3>Overflow hidden below</h3>
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Tooltip label={label}>
        <Button type="button">Hover me</Button>
      </Tooltip>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Libero
      adipisci, laboriosam id consequatur perferendis illo magnam. Provident, aut?
    </p>
  </>
);

defaultStory.story = {
  name: 'Default',
};

const veryLongLabel = 'Llanfairpwllgwyngyllgogerychwyrndrob';

export const withVeryLongWord = () => (
  <Tooltip label={veryLongLabel}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

withVeryLongWord.story = {
  name: 'With Very Long Word',
};

export const withPosition = () => (
  <Display
    items={[
      {
        component: (
          <Tooltip label={label} position="bottom">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom',
      },
      {
        component: (
          <Tooltip label={label} position="left">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left',
      },
      {
        component: (
          <Tooltip label={label} position="top">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top',
      },
      {
        component: (
          <Tooltip label={label} position="right">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right',
      },
    ]}
  />
);

withPosition.story = {
  name: 'With position defined',
};

export const zindexWars = () => {
  const Example = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
      setOpen(true);
    };

    const closeModal = () => {
      setOpen(false);
    };

    return (
      <Drawer>
        <Box mb={4}>
          <Tooltip inModal label={label} position="left">
            <Button>Hover me</Button>
          </Tooltip>
        </Box>
        <Button onClick={openModal}>Open modal</Button>
        <Modal open={open} onClose={closeModal}>
          <Tooltip label={label} inModal>
            <Button>Hover me</Button>
          </Tooltip>
        </Modal>
      </Drawer>
    );
  };

  return <Example />;
};

zindexWars.story = {
  name: 'Integration: With Drawer and Modal',
};

export const customMaxWidth = () => (
  <Tooltip label={label} maxWidth={100}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

customMaxWidth.story = {
  name: 'Custom max-width',
};

export const insideOfModal = () => (
  <Tooltip label={label} position="top">
    <Button type="button">Hover me</Button>
  </Tooltip>
);

customMaxWidth.story = {
  name: 'Custom max-width',
};
