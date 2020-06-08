import { useMemo } from 'react';
import { FlexPropsType } from './ColumnProvider.types';

export const useFlexCellProps = ({
  align,
  // TODO: Unsupported Flexbox attribute (currently treated as HTML attribute instead of CSS), desired behaviour is achieved if alignContent is added to Flexbox sanitize.
  // alignContent,
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
    () => ({
      align,
      // alignContent,
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
      // alignContent,
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
