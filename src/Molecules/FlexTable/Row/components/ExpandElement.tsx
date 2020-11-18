import React from 'react';
import styled, { css } from 'styled-components';
import FlexTable from '../..';
import { ExpandAreaProps } from '../Row.types';
import { ExpandCell } from '../../Cell/ExpandCell';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS, COLUMN_ID_EXPAND } from '../../shared/constants';
import { MediaRelatedProps } from '../../shared/shared.types';

type StyledExpandCellProps = {
  $sm: any;
  $md: any;
  $lg: any;
  $xl: any;
  $expandable?: boolean;
};

const getStylesForSize = (size: string) => css<StyledExpandCellProps>`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    ${(p) => (p[`$${size}`].expandable === true ? 'display: flex;' : '')}
    ${(p) => (p[`$${size}`].expandable === false ? 'display: none;' : '')}
  }
`;

const StyledExpandCell = styled(ExpandCell)<StyledExpandCellProps>`
  ${(p) => (p.$expandable === true ? 'display: flex;' : '')}
  ${(p) => (p.$expandable === false ? 'display: none;' : '')}
  ${(p) =>
    p.$sm ? getStylesForSize('sm') : ''}
  ${(p) => (p.$md ? getStylesForSize('md') : '')}
  ${(p) =>
    p.$lg ? getStylesForSize('lg') : ''}
  ${(p) => (p.$xl ? getStylesForSize('xl') : '')}
`;

export const ExpandElement: React.FC<
  ExpandAreaProps & {
    isContent: boolean;
    disabled?: boolean;
    setExpand: (expanded: boolean) => void;
    expandable?: boolean;
  } & MediaRelatedProps<{ expandable: boolean }>
> = ({
  isContent,
  expanded = false,
  onExpandToggle,
  setExpand,
  disabled,
  expandable,
  sm,
  md,
  lg,
  xl,
}) => {
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
      $expandable={expandable}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
    />
  );
};
