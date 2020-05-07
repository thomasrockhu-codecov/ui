import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LinkSell } from '../..';

export default {
  title: 'Molecules | LinkSell',
  parameters: {
    component: LinkSell,
  },
};

export const linkSell = () => {
  return (
    <BrowserRouter>
      <LinkSell to="somewhere">Sell</LinkSell>
    </BrowserRouter>
  );
};

linkSell.story = {
  name: 'LinkSell',
};

export const linkSellDisabled = () => {
  return (
    <BrowserRouter>
      <LinkSell disabled>Sell</LinkSell>
    </BrowserRouter>
  );
};

linkSellDisabled.story = {
  name: 'LinkSell disabled',
};

export const linkSellWithRelAsNofollow = () => {
  return (
    <BrowserRouter>
      <LinkSell to="somewhere" rel="nofollow">
        Sell
      </LinkSell>
    </BrowserRouter>
  );
};

linkSellWithRelAsNofollow.story = {
  name: 'LinkSell with rel as nofollow',
};
