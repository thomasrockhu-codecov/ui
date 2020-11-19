import React from 'react';
import styled, { css } from 'styled-components';
import Row from './Row';
import { HeaderRowComponent } from './Row.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { useFlexTable } from '../shared/FlexTableProvider';
import { Theme } from '../../../theme/theme.types';

// prettier-ignore
const getStyles = (size: string, p: StyledHeaderProps & { theme: Theme }) => {
  return `
    ${
      p[`$${size}`].stickyHeader === true
        ? `
        z-index: 1;
        position: sticky;
        top: ${p.$stickyOffsetTop}px;`
        : ''
    }
    ${
      p[`$${size}`].stickyHeader === false
          ? `
        z-index: 0;
        position: static;
        top: unset;`
          : ''
    }
  `;
};

const getStylesForSize = (size: string) => css<StyledHeaderProps>`
  ${(p) => {
    const styles = getStyles(size, p);
    if (size !== 'xs') {
      return `${p.theme.media.greaterThan(p.theme.breakpoints[size])} { ${styles} }`;
    }
    return styles;
  }}
`;

type StyledHeaderProps = {
  $hideSeparator: boolean;
  $separatorColor: ColorFn;
  $xs: any;
  $sm: any;
  $md: any;
  $lg: any;
  $xl: any;
  $stickyOffsetTop: number;
};
// prettier-ignore
const StyledHeaderRow = styled(Row)<StyledHeaderProps>`
  ${(p) => (!p.$hideSeparator ? `border-bottom: 1px solid ${p.$separatorColor(p.theme)}` : '')};

  ${(p) => (p.$xs ? getStylesForSize('xs') : '')}
  ${(p) => (p.$sm ? getStylesForSize('sm') : '')}
  ${(p) => (p.$md ? getStylesForSize('md') : '')}
  ${(p) => (p.$lg ? getStylesForSize('lg') : '')}
  ${(p) => (p.$xl ? getStylesForSize('xl') : '')}
`;

export const HeaderRow: HeaderRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = (theme) => theme.color.text,
  children,
  stickyOffsetTop = 0,
  ...htmlProps
}) => {
  const { xs, sm, md, lg, xl } = useFlexTable('stickyHeader');
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
      isContent={false}
      {...htmlProps}
    >
      {children}
    </StyledHeaderRow>
  );
};
