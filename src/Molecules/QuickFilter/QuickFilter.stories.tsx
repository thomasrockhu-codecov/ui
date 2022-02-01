import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Icon, Card } from '../..';
import { QuickFilter } from './QuickFilter';
import { Props } from './QuickFilter.types';

export default {
  title: 'Molecules / QuickFilter',
  component: QuickFilter,
} as Meta;

const onChange = action('on change triggered');

const Template: Story<Props> = (args) => (
  <div style={{ padding: '10px', backgroundColor: 'white' }}>
    <QuickFilter {...args} />
  </div>
);

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
  label: 'Default',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: <Icon.Money16 />,
};

export const BothIconAndLabel = Template.bind({});
BothIconAndLabel.args = {
  icon: <Icon.MonthlySavings16 />,
  label: 'Default',
};

export const AnotherIconAndLabel = Template.bind({});
AnotherIconAndLabel.args = {
  icon: <Icon.Money16 />,
  label: 'Another label yqPomå',
};

export const WithSelectedInitially = Template.bind({});
WithSelectedInitially.args = {
  icon: <Icon.Money16 />,
  selectedInitially: true,
};

export const WithValueControlledBehavior = () => {
  const Component = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Card>
        <QuickFilter
          label="Controlled selection card"
          value="This component is controlled"
          selected={isChecked}
          onChange={onChange}
        />
        <button type="button" onClick={() => setIsChecked(true)}>
          Selected
        </button>
        <button type="button" onClick={() => setIsChecked(false)}>
          Not selected
        </button>
        value: {isChecked.toString()}
      </Card>
    );
  };
  return <Component />;
};
