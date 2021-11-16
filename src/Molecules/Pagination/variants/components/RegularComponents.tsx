import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon, Typography } from '../../../../index';

const ChevronIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) =>
  direction === 'left' ? (
    <Icon.ChevronLeft8 color="inherit" />
  ) : (
    <Icon.ChevronRight8 color="inherit" />
  );

const StyledFlexbox = styled(Flexbox)<{ $numberOfPages: number }>`
  width: ${(p) => {
    const NUMBER_WIDTH = p.theme.spacing.unit(4.5);
    const CHEVRON_PADDING = 2 * p.theme.spacing.unit(2);
    const BETWEEN_8_AND_13_PAGES_WIDTH = p.theme.spacing.unit(38);
    const BETWEEN_14_AND_101_PAGES_WIDTH = p.theme.spacing.unit(42);
    const MORE_THAN_101_PAGES_WIDTH = p.theme.spacing.unit(50);

    if (p.$numberOfPages < 8) return p.$numberOfPages * NUMBER_WIDTH + CHEVRON_PADDING;

    if (p.$numberOfPages >= 8 && p.$numberOfPages <= 13) return BETWEEN_8_AND_13_PAGES_WIDTH;

    if (p.$numberOfPages >= 14 && p.$numberOfPages <= 101) return BETWEEN_14_AND_101_PAGES_WIDTH;

    return MORE_THAN_101_PAGES_WIDTH;
  }}px;
`;

const TruncatedPageNumbers = () => (
  <Flexbox item container alignItems="center" as="li">
    <Typography type="secondary" weight="bold">
      ...
    </Typography>
  </Flexbox>
);

export { ChevronIcon, StyledFlexbox, TruncatedPageNumbers };
