import React from 'react';
import { Icon } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Icon',
};

export const defaultUse = () => <Icon.ArrowLeft32 />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <span>
    You can put the <Icon.ArrowLeft16 inline /> directly in the text !
  </span>
);

inlineStory.story = {
  name: 'Inline',
};

export const differentColor = () => (
  <div style={{ color: 'blue' }}>
    You can have different color text around{' '}
    <Icon.ArrowLeft16 inline color={(t) => t.color.positive} /> an icon
  </div>
);

differentColor.story = {
  name: 'Different color',
};

export const titleExample = () => (
  <div style={{ color: 'blue' }}>
    You can use title prop for a hover tooltip
    <Icon.ArrowLeft16 inline title="example tooltip" /> on an icon
  </div>
);

titleExample.story = {
  name: 'Title example',
};

export const availableIcons = () => (
  <Display
    items={Object?.entries(Icon)
      ?.sort((a, b) => a[0].localeCompare(b[0]))
      .map(([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
        title: iconName,
        component: (
          <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
            <IconComponent />
          </div>
        ),
      }))}
  />
);

availableIcons.story = {
  name: 'Available icons',
};

export const allIconsColored = () => (
  <>
    {Object?.entries(Icon)
      ?.sort((a, b) => a[0].localeCompare(b[0]))
      .map(([_, IconComponent]: [string, React.ComponentType<any>]) => (
        <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
          <IconComponent color={(t: any) => t.color.cta} />
        </div>
      ))}
  </>
);

allIconsColored.story = {
  name: 'All icons (colored)',
};
