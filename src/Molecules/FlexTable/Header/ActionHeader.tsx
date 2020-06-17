import React, { useEffect } from 'react';
import R from 'ramda';
import { ActionHeaderComponent } from './ActionHeader.types';
import { Flexbox } from '../../..';
import { useFlexCellProps, useColumn, ACTION_SET_FLEX_PROPS } from '../shared/ColumnProvider';

const ActionHeader: ActionHeaderComponent = props => {
  const [columnState, columnDispatch] = useColumn('actions');

  const cellFlexProps = useFlexCellProps({
    justifyContent: 'flex-end',
    flex: `0 20px`,
    ...props,
  });

  useEffect(() => {
    if (cellFlexProps) {
      columnDispatch({ type: ACTION_SET_FLEX_PROPS, flexProps: cellFlexProps });
    }
  }, [cellFlexProps, columnDispatch]);

  return <Flexbox {...R.propOr(cellFlexProps, 'flexProps', columnState)} />;
};

export default ActionHeader;
