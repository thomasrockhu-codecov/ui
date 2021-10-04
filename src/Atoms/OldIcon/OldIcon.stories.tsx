import React from 'react';
import { number, select, color } from '@storybook/addon-knobs';
import { Theme } from '../../theme/theme.types';
import { OldIcon } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / OldIcon',
};

export const defaultUse = () => <OldIcon.ArrowRight />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <>
    You can put the <OldIcon.ArrowRight inline /> directly in the text with inline prop!
  </>
);

const directionKnob = () => select('Direction', ['up', 'right', 'down', 'left'], 'up');

export const thinArrow = () => <OldIcon.ThinArrow direction={directionKnob()} />;

export const thinChevron = () => <OldIcon.ThinChevron direction={directionKnob()} />;

export const chevron = () => <OldIcon.Chevron direction={directionKnob()} />;

export const sortArrow = () => (
  <OldIcon.SortArrow direction={select('Direction', ['ascending', 'descending'], 'ascending')} />
);

export const Account = () => (
  <OldIcon.Account
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const CalendarO = () => (
  <OldIcon.CalendarO
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const FAQ = () => (
  <OldIcon.FAQ size={number('Size', 10)} fill={(t) => color('Fill color', t.color.cta)} />
);

export const Percent = () => (
  <OldIcon.Percent
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const Profile = () => (
  <OldIcon.Profile
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const ThreeDotsO = () => (
  <OldIcon.ThreeDotsO
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const TaxPercentage = () => (
  <OldIcon.TaxPercentage
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const Transfer = () => (
  <OldIcon.Transfer
    size={number('Size', 10)}
    fill={(t) => color('Fill color', t.color.backgroundBlack)}
  />
);

export const UrgentMessage = () => (
  <OldIcon.UrgentMessage
    size={number('Size', 10)}
    fill={(t: Theme) => color('Fill color', t.color.text)}
    stroke={(t: Theme) => color('Stroke color', t.color.negative)}
  />
);

inlineStory.story = {
  name: 'Inline',
};

export const differentSizeAndFill = () => (
  <OldIcon.ArrowRight size={10} fill={(t) => t.color.positive} />
);

differentSizeAndFill.story = {
  name: 'Different size and fill',
};

export const withModifiedStroke = () => (
  <Display
    items={[
      {
        title: 'Star with stroke modified',
        component: <OldIcon.Star size={10} stroke={(t) => t.color.positive} />,
      },
      {
        title: 'CrossThin with stroke modified',
        component: <OldIcon.CrossThin size={10} stroke={(t) => t.color.positive} />,
      },
      {
        title: 'CheckMarkCircle with stroke modified',
        component: (
          <OldIcon.CheckMarkCircle
            size={10}
            fill={(t) => t.color.positive}
            stroke={(t) => t.color.negative}
          />
        ),
      },
      {
        title: 'CrossCircle with stroke modified',
        component: (
          <OldIcon.CrossCircle
            size={10}
            fill={(t) => t.color.positive}
            stroke={(t) => t.color.negative}
          />
        ),
      },
      {
        title: 'InfoCircle with stroke modified',
        component: (
          <OldIcon.InfoCircle
            size={10}
            fill={(t) => t.color.positive}
            stroke={(t) => t.color.negative}
          />
        ),
      },
      {
        title: 'WarningTriangle with stroke modified',
        component: (
          <OldIcon.WarningTriangle
            size={10}
            fill={(t) => t.color.positive}
            stroke={(t) => t.color.negative}
          />
        ),
      },
      {
        title: 'Star24 with both stroke modified',
        component: <OldIcon.Star24 size={10} stroke={(t) => t.color.positive} />,
      },
      {
        title: 'Star24 with both stroke and fill modified',
        component: (
          <OldIcon.Star24
            size={10}
            fill={(t) => t.color.positive}
            stroke={(t) => t.color.positive}
          />
        ),
      },
    ]}
  />
);

withModifiedStroke.story = {
  name: 'With modified stroke',
};

export const availableOldIcons = () => (
  <Display
    items={Object?.entries(OldIcon)?.map(
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

availableOldIcons.story = {
  name: 'Available old icons',
};

export const allOldIconsColored = () => (
  <>
    {Object?.entries(OldIcon)?.map(([key, IconComponent]: [string, React.ComponentType<any>]) => (
      <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
        <IconComponent
          color={(t: any) => t.color.cta}
          fill={(t: any) => t.color.cta}
          {...(key === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
        />
      </div>
    ))}
  </>
);

allOldIconsColored.story = {
  name: 'All icons (colored)',
};
