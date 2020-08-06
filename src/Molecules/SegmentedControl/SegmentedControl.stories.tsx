import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import SegmentedControl from './SegmentedControl';
import docs from './SegmentedControl.mdx';

export default {
  title: 'Molecules | SegmentedControl',
  parameters: {
    component: SegmentedControl,
    ...docs.parameters,
  },
};

export const Default = () => (
  <div style={{ backgroundColor: 'white', width: '50%', margin: '50px', height: '100%' }}>
    <SegmentedControl>
      <SegmentedControl.Item itemId={0} onItemClick={action('clicked item 0')}>
        Option 1
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={1} onItemClick={action('clicked item 1')}>
        Option 2
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={2} onItemClick={action('clicked item 2')}>
        Option 3
      </SegmentedControl.Item>
    </SegmentedControl>
  </div>
);

export const LastItemSelected = () => (
  <div style={{ backgroundColor: 'white', width: '110px', margin: '50px', height: '100%' }}>
    <SegmentedControl selectedInitially={1}>
      <SegmentedControl.Item itemId={0} onItemClick={action('clicked item 0')}>
        %
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={1} onItemClick={action('clicked item 1')}>
        SEK
      </SegmentedControl.Item>
    </SegmentedControl>
  </div>
);

export const controlledBehaviour = () => {
  const ControlledExample = () => {
    const [selected, setSelected] = useState(0);

    return (
      <div style={{ backgroundColor: 'white', width: '250px', margin: '50px', height: '100%' }}>
        <SegmentedControl selected={selected} onClick={(e, itemId) => setSelected(itemId)}>
          <SegmentedControl.Item itemId={0}>Option 1</SegmentedControl.Item>
          <SegmentedControl.Item itemId={1}>Option 2</SegmentedControl.Item>
          <SegmentedControl.Item itemId={2}>Option 3</SegmentedControl.Item>
        </SegmentedControl>
      </div>
    );
  };
  return <ControlledExample />;
};
