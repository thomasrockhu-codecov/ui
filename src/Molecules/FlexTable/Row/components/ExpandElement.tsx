import React from 'react';
import styled from 'styled-components';
import FlexTable from '../..';
import { ExpandAreaProps } from '../Row.types';
import { ExpandCell } from '../../Cell/ExpandCell';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS, COLUMN_ID_EXPAND } from '../../shared/constants';
import { MediaRelatedProps } from '../../shared/shared.types';
import { useFlexTable } from '../../shared/FlexTableProvider';
import { getStylesForSizes } from '../../shared';

type ScreenSizeConfigurableProps = {
  expandable: boolean;
};

type StyledExpandCellProps = {
  $xs: any;
  $sm?: Partial<ScreenSizeConfigurableProps>;
  $md?: Partial<ScreenSizeConfigurableProps>;
  $lg?: Partial<ScreenSizeConfigurableProps>;
  $xl?: Partial<ScreenSizeConfigurableProps>;
};

const getExpandableStyles = ({ expandable }: ScreenSizeConfigurableProps) => {
  if (expandable === true) {
    return 'display: flex;';
  }
  if (expandable === false) {
    return 'display: none;';
  }
  return '';
};

const StyledExpandCell = styled(ExpandCell)<StyledExpandCellProps>`
  ${(p) =>
    getStylesForSizes<
      { xs: ScreenSizeConfigurableProps } & MediaRelatedProps<ScreenSizeConfigurableProps>
    >(
      {
        xs: p.$xs,
        sm: p.$sm,
        md: p.$md,
        lg: p.$lg,
        xl: p.$xl,
      },
      {
        expandable: getExpandableStyles,
      },
    )}
`;

export const ExpandElement: React.FC<
  ExpandAreaProps & {
    isContent: boolean;
    disabled?: boolean;
    setExpand: (expanded: boolean) => void;
  }
> = ({ isContent, expanded = false, onExpandToggle, setExpand, disabled }) => {
  const { xs, sm, md, lg, xl } = useFlexTable('expandable');

  if (!isContent) {
    return (
      <FlexTable.Header
        columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
        {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
      />
    );
  }

  return (
    <StyledExpandCell
      columnId={COLUMN_ID_EXPAND}
      expanded={expanded}
      onClick={() => (onExpandToggle ? onExpandToggle(!expanded) : setExpand(!expanded))}
      disabled={disabled}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
    />
  );
};
