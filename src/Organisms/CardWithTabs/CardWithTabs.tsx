import React from 'react';

import { Tabs, CardWithTitle } from '../..';
import { Component } from './CardWithTabs.types';

const CardWithTabs: Component = ({ children, ...rest }) => (
  <CardWithTitle {...rest}>
    <Tabs>{children}</Tabs>
  </CardWithTitle>
);

CardWithTabs.Tab = Tabs.Tab;

export { CardWithTabs };
