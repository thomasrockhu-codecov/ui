import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Typography, LinkSell } from '../..';

export default {
  title: 'Molecules | LinkSell',
  parameters: {
    component: LinkSell,
  },
};

export const linkSell = () => {
  return (
    <BrowserRouter>
      <Typography type="primary">
        <LinkSell to="somewhere">Sell</LinkSell>
      </Typography>
    </BrowserRouter>
  );
};

linkSell.story = {
  name: 'LinkSell',
};

export const linkSellDisabled = () => {
  return (
    <BrowserRouter>
      <Typography type="primary">
        <LinkSell disabled>Sell</LinkSell>
      </Typography>
    </BrowserRouter>
  );
};

linkSellDisabled.story = {
  name: 'LinkSell disabled',
};

export const linkSellWithRelAsNofollow = () => {
  return (
    <BrowserRouter>
      <Typography type="primary">
        <LinkSell to="somewhere" rel="nofollow">
          Sell
        </LinkSell>
      </Typography>
    </BrowserRouter>
  );
};

linkSellWithRelAsNofollow.story = {
  name: 'LinkSell with rel as nofollow',
};
