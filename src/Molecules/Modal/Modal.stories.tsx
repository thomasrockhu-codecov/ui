import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Typography, Box, Button } from '../..';

const ScrollMaker = styled.div`
  background-image: linear-gradient(${p => p.theme.color.positive}, ${p => p.theme.color.negative});
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 200vh;
`;

export default {
  title: 'Molecules | Modal',
};

export const defaultStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

defaultStory.story = {
  name: 'Default',
};

export const footerStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <div>
        <Typography type="primary" as="p">
          This is a footer which is a ReactNode, which could e.g. contain a button or only text
        </Typography>
        <Button variant="primary" onClick={() => {}}>
          Button
        </Button>
      </div>
    );

    return (
      <div>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open} footer={footer}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

footerStory.story = {
  name: 'Integration: Modal with a footer and Button',
};

export const withoutHeader = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} open={open}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

withoutHeader.story = {
  name: 'Without header',
};

export const uncontrolledBehavior = () => {
  const Example = () => {
    return (
      <div>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal title="Dialog information">
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

uncontrolledBehavior.story = {
  name: 'Uncontrolled behavior',
};
