import React from 'react';
import R from 'ramda';
import { ListItem } from './ListItem';
import { OptionList } from '../SingleSelectList/SingleSelectList';
import { Search } from './Search';
import { Action } from './Action';
import { SelectedValue } from './SelectedValue';

import { ListItem as ListItemMultiple } from './ListItemMultiple';
import { SelectedValue as SelectedValueMultiple } from './SelectedValueMultiple';
import { OptionList as OptionListMultiple } from '../MultiSelectList/MultiSelectList';

export const defaultComponents = {
  ListItem,
  List: OptionList,
  Search,
  SelectedValue,
  Action,
};

export const defaultComponentsMultiselect = {
  ListItem: ListItemMultiple,
  List: OptionListMultiple,
  Search,
  SelectedValue: SelectedValueMultiple,
  Action,
};

export const useComponentsWithDefaults = (
  components: any = {},
  options: { multiselect: boolean } = { multiselect: false },
) => {
  return React.useMemo(
    () =>
      // @ts-ignore
      R.pipe(
        // @ts-ignore
        R.map(componentRefFn =>
          typeof componentRefFn !== 'function'
            ? componentRefFn
            : React.forwardRef(componentRefFn as any),
        ),
        R.mergeRight(options.multiselect ? defaultComponentsMultiselect : defaultComponents),
      )(components),
    [components, options.multiselect],
  );
};
