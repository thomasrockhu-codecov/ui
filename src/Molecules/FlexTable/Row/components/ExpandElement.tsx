import React from 'react';
import styled from 'styled-components';
import FlexTable from '../..';
import { ExpandAreaProps } from '../Row.types';
import { ExpandCell } from '../../Cell/ExpandCell';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS, COLUMN_ID_EXPAND } from '../../shared/constants';
import { useFlexTable } from '../../shared/FlexTableProvider';
import { getStylesForSizes } from '../../shared';

type ScreenSizeConfigurableProps = {
  expandable: boolean;
};

type StyledExpandCellProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

const getExpandableStyles = ({ expandable }: ScreenSizeConfigurableProps) => {
  if (expandable) {
    return 'display: flex;';
  }
  return 'display: none;';
};

const StyledExpandCell = styled(ExpandCell)<StyledExpandCellProps>`
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledExpandCellProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      expandable: getExpandableStyles,
    },
  )}
`;

export const ExpandElement: React.FC<
  ExpandAreaProps & {
    rowType: 'header' | 'content' | 'footer';
    disabled?: boolean;
    setExpand: (expanded: boolean) => void;
  }
> = ({ rowType, expanded = false, onExpandToggle, setExpand, disabled }) => {
  const { xs, sm, md, lg, xl } = useFlexTable<'expandable'>('expandable');

  const expandProps =
    rowType === 'content'
      ? {
          expanded,
          onClick: () => (onExpandToggle ? onExpandToggle(!expanded) : setExpand(!expanded)),
          disabled,
        }
      : {
          as: rowType === 'header' ? FlexTable.Header : FlexTable.Footer,
        };

  return (
    <StyledExpandCell
      columnId={COLUMN_ID_EXPAND}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...expandProps}
      {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
    />
  );
};
