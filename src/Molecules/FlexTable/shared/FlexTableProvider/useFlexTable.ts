import { useContext } from 'react';
import * as R from 'ramda';
import { FlexTableContext } from './FlexTableProvider';
import { FlexTableState } from './FlexTableProvider.types';

export function useFlexTable<T extends keyof FlexTableState>(...args: T[]) {
  const contextData = useContext(FlexTableContext);
  if (contextData === undefined) {
    throw Error('No FlexTable provider, FlexTable rows can only be children of a FlexTable');
  }

  const { sm = {}, md = {}, lg = {}, xl = {}, ...xs } = contextData;
  return {
    xs: R.pick(args, xs),
    sm: R.pick(args, sm),
    md: R.pick(args, md),
    lg: R.pick(args, lg),
    xl: R.pick(args, xl),
  };
}
