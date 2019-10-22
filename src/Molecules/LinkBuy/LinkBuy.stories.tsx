import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Typography, LinkBuy } from '../..';

export default {
  title: 'Molecules | LinkBuy',
  parameters: {
    component: LinkBuy,
  },
};

export const linkBuy = () => {
  return (
    <BrowserRouter>
      <Typography type="primary">
        <LinkBuy to="somewhere">Buy</LinkBuy>
      </Typography>
    </BrowserRouter>
  );
};

linkBuy.story = {
  name: 'LinkBuy',
};

export const linkBuyDisabled = () => {
  return (
    <BrowserRouter>
      <Typography type="primary">
        <LinkBuy disabled>Buy</LinkBuy>
      </Typography>
    </BrowserRouter>
  );
};

linkBuyDisabled.story = {
  name: 'LinkBuy disabled',
};

export const linkBuyWithRelAsNofollow = () => {
  return (
    <BrowserRouter>
      <Typography type="primary">
        <LinkBuy to="somewhere" rel="nofollow">
          Buy
        </LinkBuy>
      </Typography>
    </BrowserRouter>
  );
};

linkBuyWithRelAsNofollow.story = {
  name: 'LinkBuy with rel as nofollow',
};
