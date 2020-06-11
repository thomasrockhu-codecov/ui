import { useMemo } from 'react';
import * as R from 'ramda';
import { FlexPropsType } from './ColumnProvider.types';

export const useFlexCellProps = ({
  align,
  alignContent,
  alignItems,
  alignSelf,
  basis,
  container = true,
  direction,
  flex = '1',
  grow,
  gutter,
  height,
  item = true,
  justifyContent,
  lg,
  md,
  order,
  shrink,
  size,
  sm,
  wrap = 'nowrap',
}: Partial<FlexPropsType>): Partial<FlexPropsType> => {
  const sharedProps = useMemo(
    () =>
      R.filter(val => val !== undefined, {
        align,
        alignContent,
        alignItems,
        alignSelf,
        basis,
        container,
        direction,
        flex,
        grow,
        gutter,
        height,
        item,
        justifyContent,
        lg,
        md,
        order,
        shrink,
        size,
        sm,
        wrap,
      }),
    [
      align,
      alignContent,
      alignItems,
      alignSelf,
      basis,
      container,
      direction,
      flex,
      grow,
      gutter,
      height,
      item,
      justifyContent,
      lg,
      md,
      order,
      shrink,
      size,
      sm,
      wrap,
    ],
  );

  return sharedProps;
};
