import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Button, Icon } from '../..';

const getIcon = (componentName: string) => {
  const IconComponent = Icon[componentName];
  IconComponent.displayName = `Icon.${componentName}`;
  return <IconComponent color="currentColor" />;
};

const include = ['componentName', 'size', 'variant', 'iconName', 'iconPlacement'];

const argTypes = {
  componentName: {
    options: [undefined, 'Pill', 'Icon'],
    control: { type: 'inline-radio' },
  },
  size: {
    control: { type: 'inline-radio' },
  },
  variant: {
    control: { type: 'inline-radio' },
  },
  iconName: {
    options: Object.keys(Icon),
    control: { type: 'select' },
  },
  iconPlacement: {
    control: { type: 'inline-radio' },
  },
};

export default {
  title: 'Molecules / Button',
  component: Button,
  parameters: {
    controls: { sort: 'alpha', include },
    docs: {
      description: {
        component: 'Configure a button here',
      },
    },
    viewMode: 'docs',
  },
  argTypes,
} as Meta;

const Template: Story<{}> = ({ componentName, iconName, iconPlacement, ...rest }: any) => {
  const ButtonComponent = componentName ? Button[componentName] : Button;
  const icon = iconName ? getIcon(iconName) : undefined;
  const commonProps = { onClick: action('clicked') };
  return componentName === 'Icon' ? (
    <ButtonComponent {...commonProps} {...rest}>
      {icon || '-'}
    </ButtonComponent>
  ) : (
    <ButtonComponent {...commonProps} icon={icon} iconPlacement={iconPlacement} {...rest}>
      {ButtonComponent.displayName}
    </ButtonComponent>
  );
};

export const ButtonConfigStory = Template.bind({});

ButtonConfigStory.storyName = 'Configure a Button';
