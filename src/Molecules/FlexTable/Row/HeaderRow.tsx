import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { HeaderRowComponent } from './Row.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { useFlexTable } from '../shared/FlexTableProvider';
import { MediaRelatedProps } from '../shared/shared.types';
import { getStylesForSizes } from '../shared';

const getStickyHeaderStyles = ({
  stickyHeader,
  stickyOffsetTop,
}: {
  stickyHeader: boolean;
  stickyOffsetTop: number;
}) => {
  if (stickyHeader) {
    return `
      z-index: 1;
      position: sticky;
      top: ${stickyOffsetTop}px;
    `;
  }

  return `
      z-index: 0;
      position: static;
      top: unset;
    `;
};

type ScreenSizeConfigurableProps = { stickyHeader: boolean };

type StyledHeaderProps = {
  $hideSeparator: boolean;
  $separatorColor: ColorFn;
  $xs: ScreenSizeConfigurableProps;
  $sm?: Partial<ScreenSizeConfigurableProps>;
  $md?: Partial<ScreenSizeConfigurableProps>;
  $lg?: Partial<ScreenSizeConfigurableProps>;
  $xl?: Partial<ScreenSizeConfigurableProps>;
  $stickyOffsetTop: number;
};

const StyledHeaderRow = styled(Row)<StyledHeaderProps>`
  ${(p) => (!p.$hideSeparator ? `border-bottom: 1px solid ${p.$separatorColor(p.theme)}` : '')};

  ${(p) =>
    getStylesForSizes<
      {
        stickyOffsetTop: number;
        xs: ScreenSizeConfigurableProps;
      } & MediaRelatedProps<ScreenSizeConfigurableProps>
    >(
      {
        stickyOffsetTop: p.$stickyOffsetTop,
        xs: p.$xs,
        sm: p.$sm,
        md: p.$md,
        lg: p.$lg,
        xl: p.$xl,
        theme: p.theme,
      },
      {
        stickyHeader: getStickyHeaderStyles,
      },
    )}
`;

export const HeaderRow: HeaderRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = (theme) => theme.color.text,
  children,
  stickyOffsetTop = 0,
  ...htmlProps
}) => {
  const { xs, sm, md, lg, xl } = useFlexTable<'stickyHeader'>('stickyHeader');
  return (
    <StyledHeaderRow
      $hideSeparator={hideSeparator}
      $separatorColor={separatorColor}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      $stickyOffsetTop={stickyOffsetTop}
      className={className}
      hoverHighlight={false}
      rowType="header"
      {...htmlProps}
    >
      {children}
    </StyledHeaderRow>
  );
};
