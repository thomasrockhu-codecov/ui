import * as React from 'react';
import { OptionList, Option } from './SingleSelectList';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules | Input / Select / SingleSelectList',
};

export const itemDefault = () => <Option value={0} label="First" />;

itemDefault.story = {
  name: 'Item default',
};

export const itemSelected = () => <Option value={0} label="First" selected />;

itemSelected.story = {
  name: 'Item selected',
};

export const itemDisabled = () => <Option value={0} label="First" disabled />;

itemDisabled.story = {
  name: 'Item disabled',
};

export const listWithDifferentArrowPositions = () => (
  <Display
    items={[
      {
        component: (
          <OptionList>
            <Option value={-1} label="Default?" />
            <Option value={0} label="First" selected />
            <Option value={2} label="Second" />
            <Option value={3} label="Disabled" disabled />
          </OptionList>
        ),
        title: 'Default (right)',
      },

      {
        component: (
          <OptionList position="left">
            <Option value={-1} label="Default?" />
            <Option value={0} label="First" selected />
            <Option value={2} label="Second" />
            <Option value={3} label="Disabled" disabled />
          </OptionList>
        ),
        title: 'Left',
      },
      {
        component: (
          <OptionList position="center">
            <Option value={-1} label="Default?" />
            <Option value={0} label="First" selected />
            <Option value={2} label="Second" />
            <Option value={3} label="Disabled" disabled />
          </OptionList>
        ),
        title: 'Center',
      },
    ]}
  />
);

listWithDifferentArrowPositions.story = {
  name: 'List with different arrow positions',
};
