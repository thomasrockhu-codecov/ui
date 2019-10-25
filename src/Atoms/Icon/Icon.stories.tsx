import React from 'react';
import { Icon } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms | Icon',
};

export const defaultUse = () => <Icon.ArrowRight />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <span>
    You can put the <Icon.ArrowRight inline /> directly in the text with inline prop!
  </span>
);

inlineStory.story = {
  name: 'Inline',
};

export const differentSizeAndFill = () => (
  <Icon.ArrowRight size={10} fill={t => t.color.positive} />
);

differentSizeAndFill.story = {
  name: 'Different size and fill',
};

export const withModifiedStroke = () => (
  <Display
    items={[
      {
        title: 'Star with stroke modified',
        component: <Icon.Star size={10} stroke={t => t.color.positive} />,
      },
      {
        title: 'Star24 with both stroke modified',
        component: <Icon.Star24 size={10} stroke={t => t.color.positive} />,
      },
      {
        title: 'Star24 with both stroke and fill modified',
        component: (
          <Icon.Star24 size={10} fill={t => t.color.positive} stroke={t => t.color.positive} />
        ),
      },
    ]}
  />
);

withModifiedStroke.story = {
  name: 'With modified stroke',
};

export const availableIcons = () => (
  <Display
    items={Object.entries(Icon).map(
      ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
        title: iconName,
        component: (
          <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
            <IconComponent {...(iconName === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})} />
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
    {Object.entries(Icon).map(([key, IconComponent]: [string, React.ComponentType<any>]) => (
      <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
        <IconComponent
          color={(t: any) => t.color.cta}
          {...(key === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
        />
      </div>
    ))}
  </>
);

allIconsColored.story = {
  name: 'All icons (colored)',
};
