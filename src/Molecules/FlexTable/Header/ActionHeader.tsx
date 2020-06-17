import React, { useEffect } from 'react';
import R from 'ramda';
import { ActionHeaderComponent } from './ActionHeader.types';
import { Flexbox } from '../../..';
import { useFlexCellProps, useColumnLayout, ACTION_SET_FLEX_PROPS } from '../shared/ColumnProvider';

const ActionHeader: ActionHeaderComponent = props => {
  const { icons } = props;

  const [columnLayout, columnDispatch] = useColumnLayout('actions');

  const cellFlexProps = useFlexCellProps({
    ...props,
    justifyContent: 'flex-end',
    flex: `0 ${16 * icons + 8}px`,
  });

  useEffect(() => {
    if (cellFlexProps) {
      columnDispatch({ type: ACTION_SET_FLEX_PROPS, flexProps: cellFlexProps });
    }
  }, [cellFlexProps, columnDispatch]);

  return <Flexbox {...R.propOr(cellFlexProps, 'flexProps', columnLayout)} />;
};

export default ActionHeader;
