import { useMemo } from 'react';
import * as R from 'ramda';
import { FlexPropsType } from './ColumnProvider.types';
import { useColumnLayout } from './useColumn';
import { assert } from '../../../../common/utils';

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
  const sharedProps = useMemo(
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

  return sharedProps;
};

export const useFlexCellProps = (props: Partial<FlexPropsType> & { columnId: string }) => {
  const { columnId } = props;
  const cellFlexProps = usePickFlexCellProps(props);
  const [columnLayout] = useColumnLayout(columnId);

  const cellOrColumnLayoutProps = !R.isEmpty(cellFlexProps)
    ? cellFlexProps
    : (columnLayout && columnLayout.flexProps) || EMPTY_OBJECT;

  if (process.env.NODE_ENV !== 'production') {
    const isOldApi =
      R.isEmpty(cellFlexProps) &&
      !R.isEmpty(columnLayout?.flexProps ?? {}) &&
      JSON.stringify(columnLayout.flexProps) !== JSON.stringify(DEFAULT_CELL_FLEX_PROPS);
    assert(
      !isOldApi,
      `It seems like you are trying to assign all flexProps via the header for ${columnId}, which doesn't support SSR. Set flexProps on each cell instead.`,
      { level: 'warn' },
    );
  }

  const flexProps = { ...DEFAULT_CELL_FLEX_PROPS, ...cellOrColumnLayoutProps };
  return flexProps;
};
