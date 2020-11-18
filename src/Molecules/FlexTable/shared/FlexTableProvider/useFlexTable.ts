import { useContext } from 'react';
import * as R from 'ramda';
import { FlexTableContext } from './FlexTableProvider';
import { Props as FlexTableProviderProps, FlexTableState } from './FlexTableProvider.types';

export const useFlexTable = (...args: Array<keyof FlexTableState>): FlexTableProviderProps => {
  const contextData = useContext(FlexTableContext);
  if (contextData === undefined) {
    throw Error('No FlexTable provider, FlexTable rows can only be children of a FlexTable');
  }

  const { sm = {}, md = {}, lg = {}, xl = {}, ...xs } = contextData;

  return {
    ...xs, // <-- TODO: `...xs` is only for backwards compatibility, it should be removed once all consumers have migrated
    xs: R.pick(args, xs),
    ...R.reject(R.isEmpty, {
      sm: R.pick(args, sm),
      md: R.pick(args, md),
      lg: R.pick(args, lg),
      xl: R.pick(args, xl),
    }),
  };
};
