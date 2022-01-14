import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Box, Switch, Typography } from '../..';
import { SwitchToggle } from '.';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / Switch',
  parameters: {
    component: [Switch, SwitchToggle],
  },
};

export const defaultOff = () => <Switch label="Notify me by email" onClick={action('clicked')} />;

export const defaultOn = () => (
  <Switch label="Notify me by email" onClick={action('clicked')} checkedInitially />
);

export const disabledStory = () => <Switch label="Notify me by email" disabled />;

disabledStory.story = {
  name: 'Disabled',
};

export const controlledBehaviour = () => {
  const ControlledExample = () => {
    const [checked, setChecked] = useState(true);

    return (
      <Switch label="Notify me by email" onClick={() => setChecked(!checked)} checked={checked} />
    );
  };
  return <ControlledExample />;
};

controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const withLabelPropAsReactNode = () => (
  <Switch label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
);

withLabelPropAsReactNode.story = {
  name: 'With Label prop as ReactNode',
};

export const withHiddenLabel = () => (
  <Switch label="Notify me by email" onClick={action('clicked')} hiddenLabel />
);

withHiddenLabel.story = {
  name: 'With hidden label',
};

export const readOnly = () => (
  <Display
    items={[
      {
        component: <Switch label="Necessary cookies" onClick={action('clicked')} readOnly />,
        title: 'Off',
      },
      {
        component: (
          <Switch label="Necessary cookies" onClick={action('clicked')} readOnly checkedInitially />
        ),
        title: 'On',
      },
    ]}
  />
);

export const defaultSwitchToggle = () => {
  const DefaultSwitchToggle = () => {
    const toggleOptions = {
      left: 'SEK',
      right: '%',
    };

    const [toggled, setToggled] = useState<boolean>(false);
    const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

    return (
      <Box py={5}>
        <SwitchToggle
          checked={toggled}
          label={
            <Box pl={1}>
              <Typography>{toggledValue} is active | </Typography>
            </Box>
          }
          onClick={() => setToggled((prevState) => !prevState)}
          valueLeft={toggleOptions.left}
          valueRight={toggleOptions.right}
        />
      </Box>
    );
  };

  return <DefaultSwitchToggle />;
};

defaultSwitchToggle.story = {
  name: 'Default  Switch Toggle',
};

export const augmentedWidthSwitchToggle = () => {
  const AugmentedWidthSwitchToggle = () => {
    const toggleOptions = {
      left: 'Swedish',
      right: 'Finnish',
    };

    const [toggled, setToggled] = useState<boolean>(false);
    const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

    return (
      <Box py={5}>
        <SwitchToggle
          checked={toggled}
          label={
            <Box pl={1}>
              <Typography>{toggledValue} is active | </Typography>
            </Box>
          }
          onClick={() => setToggled((prevState) => !prevState)}
          valueLeft={toggleOptions.left}
          valueRight={toggleOptions.right}
          knobWidth={25}
          trackWidth={48}
        />
      </Box>
    );
  };

  return <AugmentedWidthSwitchToggle />;
};

augmentedWidthSwitchToggle.story = {
  name: 'Augmented Width Switch Toggle',
};
