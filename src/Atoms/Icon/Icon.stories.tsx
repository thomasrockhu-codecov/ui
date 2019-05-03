import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../../';
import { Display } from '../../common/Display';

storiesOf('Atoms | Icon', module)
  .add('Default use', () => <Icon.ArrowRight />)
  .add('Different size and color', () => (
    <Icon.ArrowRight size={10} color={t => t.color.positive} />
  ))
  .add('Available icons', () => (
    <Display
      items={Object.entries(Icon).map(
        ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
          title: iconName,
          component: <IconComponent />,
        }),
      )}
    />
  ));
