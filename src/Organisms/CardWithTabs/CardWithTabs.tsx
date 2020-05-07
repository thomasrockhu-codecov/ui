import React from 'react';
import { Tabs, CardWithTitle } from '../..';
import { Component } from './CardWithTabs.types';

const CardWithTabs: Component & {
  Tab: typeof Tabs.Tab;
} = ({ activeTabIndex, children, initialActiveTabIndex, ...rest }) => {
  return (
    <CardWithTitle {...rest}>
      <Tabs activeTabIndex={activeTabIndex} initialActiveTabIndex={initialActiveTabIndex}>
        {children}
      </Tabs>
    </CardWithTitle>
  );
};

CardWithTabs.Tab = Tabs.Tab;

export { CardWithTabs };
