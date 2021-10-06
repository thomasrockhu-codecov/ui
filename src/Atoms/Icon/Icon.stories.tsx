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
  <>
    You can put the <Icon.ArrowLeft16 inline /> directly in the text !
  </>
);

inlineStory.story = {
  name: 'Inline',
};

export const differentColor = () => <Icon.ArrowLeft32 color={(t) => t.color.positive} />;

differentColor.story = {
  name: 'Different color',
};

export const availableIcons = () => (
  <Display
    items={Object?.entries(Icon)?.map(
      ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
        title: iconName,
        component: (
          <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
            <IconComponent />
          </div>
        ),
      }),
    )}
  />
);

availableIcons.story = {
  name: 'Available icons',
};

export const allIconsColored = () => (
  <>
    {Object?.entries(Icon)?.map(([_, IconComponent]: [string, React.ComponentType<any>]) => (
      <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
        <IconComponent color={(t: any) => t.color.cta} />
      </div>
    ))}
  </>
);

allIconsColored.story = {
  name: 'All icons (colored)',
};
