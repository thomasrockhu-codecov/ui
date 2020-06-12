import React, { useEffect } from 'react';
import R from 'ramda';
import { IconHeaderComponent } from './IconHeader.types';
import { Flexbox } from '../../..';
import { useFlexCellProps, useColumn, ACTION_SET_FLEX_PROPS } from '../shared/ColumnProvider';

const IconHeader: IconHeaderComponent = props => {
  const { columnId, icons } = props;

  const [columnState, columnDispatch] = useColumn(columnId);

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

  return <Flexbox {...R.propOr(cellFlexProps, 'flexProps', columnState)} />;
};

export default IconHeader;
