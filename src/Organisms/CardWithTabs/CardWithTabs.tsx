import React from 'react';

import { Tabs, CardWithTitle } from '../..';
import { Component } from './CardWithTabs.types';

const CardWithTabs: Component = ({ children, initialActiveTabIndex, ...rest }) => (
  <CardWithTitle {...rest}>
    <Tabs initialActiveTabIndex={initialActiveTabIndex}>{children}</Tabs>
  </CardWithTitle>
);

CardWithTabs.Tab = Tabs.Tab;

export { CardWithTabs };
