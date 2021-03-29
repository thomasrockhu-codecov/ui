import { useMemo } from 'react';
import * as R from 'ramda';
import { FlexPropsType } from '../shared.types';

const EMPTY_OBJECT = {};
const DEFAULT_CELL_FLEX_PROPS: Partial<FlexPropsType> = {
  container: true,
  flex: '1',
  item: true,
  wrap: 'nowrap',
};

const usePickFlexCellProps = ({
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
  hidden,
  xl,
}: Partial<FlexPropsType>): Partial<FlexPropsType> => {
  return useMemo(
    () =>
      R.filter((val) => val !== undefined, {
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
        hidden,
        xl,
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
      hidden,
      xl,
    ],
  );
};

export const useFlexCellProps = (props: Partial<FlexPropsType>) => {
  const cellFlexProps = usePickFlexCellProps(props) || EMPTY_OBJECT;
  return { ...DEFAULT_CELL_FLEX_PROPS, ...cellFlexProps };
};
