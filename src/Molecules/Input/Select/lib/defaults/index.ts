import { useMemo } from 'react';
import R from 'ramda';
import { ListItem } from './ListItem';
import { Search } from './Search';
import { Action } from './Action';
import { SelectedValue } from './SelectedValue';

import { ListItem as ListItemMultiple } from './ListItemMultiple';
import { SelectedValue as SelectedValueMultiple } from './SelectedValueMultiple';
import { List } from './List';
import { ListFullScreen } from './ListFullScreen';

export const defaultComponents = {
  ListItem,
  List,
  ListFullScreen,
  Search,
  SelectedValue,
  Action,
};

export const defaultComponentsMultiselect = {
  ListItem: ListItemMultiple,
  List,
  ListFullScreen,
  Search,
  SelectedValue: SelectedValueMultiple,
  Action,
};

export const useComponentsWithDefaults = (
  components: any = {},
  options: { multiselect: boolean } = { multiselect: false },
) => {
  return useMemo(
    () =>
      // @ts-ignore
      R.pipe(
        // prettier-ignore
        R.mergeRight(options.multiselect ? defaultComponentsMultiselect : defaultComponents),
      )(components),
    [components, options.multiselect],
  );
};
