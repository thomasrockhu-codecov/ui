import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LinkBuy } from '../..';

export default {
  title: 'Molecules | LinkBuy',
  parameters: {
    component: LinkBuy,
  },
};

export const linkBuy = () => {
  return (
    <BrowserRouter>
      <LinkBuy to="somewhere">Buy</LinkBuy>
    </BrowserRouter>
  );
};

linkBuy.story = {
  name: 'LinkBuy',
};

export const linkBuyDisabled = () => {
  return (
    <BrowserRouter>
      <LinkBuy disabled>Buy</LinkBuy>
    </BrowserRouter>
  );
};

linkBuyDisabled.story = {
  name: 'LinkBuy disabled',
};

export const linkBuyWithRelAsNofollow = () => {
  return (
    <BrowserRouter>
      <LinkBuy to="somewhere" rel="nofollow">
        Buy
      </LinkBuy>
    </BrowserRouter>
  );
};

linkBuyWithRelAsNofollow.story = {
  name: 'LinkBuy with rel as nofollow',
};
