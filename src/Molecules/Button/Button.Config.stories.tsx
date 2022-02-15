import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { NewButton as Button, Icon } from '../..';

const getIcon = (componentName: string) => {
  const IconComponent = Icon[componentName];
  IconComponent.displayName = `Icon.${componentName}`;
  return <IconComponent color="currentColor" />;
};

export default {
  title: 'Molecules / Button',
  component: (name) => Button[name],
  parameters: {
    controls: { sort: 'alpha' },
    docs: {
      description: {
        component: 'Configure a button here',
      },
    },
    viewMode: 'docs',
  },
  argTypes: {
    componentName: {
      options: Object.keys(Button),
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'neutral'],
      control: { type: 'inline-radio' },
    },
    iconName: {
      options: Object.keys(Icon),
      control: { type: 'select' },
    },
    iconPlacement: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<{}> = ({ componentName, iconName, iconPlacement, ...rest }: any) => {
  const ButtonComponent = Button[componentName];
  ButtonComponent.displayName = `Button.${componentName}`;
  const icon = iconName ? getIcon(iconName) : undefined;
  const commonProps = { onClick: action('clicked') };
  return componentName === 'Icon' ? (
    <ButtonComponent {...commonProps} {...rest}>
      {icon || '-'}
    </ButtonComponent>
  ) : (
    <ButtonComponent {...commonProps} icon={icon} iconPlacement={iconPlacement} {...rest}>
      Button
    </ButtonComponent>
  );
};

export const ButtonConfigStory = Template.bind({});
ButtonConfigStory.args = {
  componentName: 'Base',
};

ButtonConfigStory.storyName = 'Configure a button';
