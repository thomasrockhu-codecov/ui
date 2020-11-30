import React from 'react';
import styled from 'styled-components';
import { ExpandArea } from '.';
import { ColorFn } from '../../../../common/Types/sharedTypes';
import { getStylesForSizes } from '../../shared';
import { useFlexTable } from '../../shared/FlexTableProvider';
import { ExpandRowComponent } from '../Row.types';

type ScreenSizeConfigurableProps = {
  expandable: boolean;
};

const getExpandableStyles = ({ expandable }: ScreenSizeConfigurableProps) => {
  if (expandable) {
    return 'display: block;';
  }
  return 'display: none;';
};

type StyledExpandedRow = {
  $separatorColor: ColorFn;
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

const StyledExpandedRow = styled('div')<StyledExpandedRow>`
  border-left: ${(p) => p.theme.spacing.unit(0.5)}px solid ${(p) => p.theme.color.cta};
  border-bottom: 1px solid ${(p) => p.$separatorColor(p.theme)};

  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledExpandedRow) => ({
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

export const ExpandRow: ExpandRowComponent = ({
  expandItems,
  expandChildren,
  separatorColor = (theme) => theme.color.divider,
  ...htmlProps
}) => {
  const { xs: $xs, sm: $sm, md: $md, lg: $lg, xl: $xl } = useFlexTable<'expandable'>('expandable');
  return (
    <StyledExpandedRow
      role="row"
      $separatorColor={separatorColor}
      {...htmlProps}
      $xs={$xs}
      $sm={$sm}
      $md={$md}
      $lg={$lg}
      $xl={$xl}
    >
      <ExpandArea expandItems={expandItems} expandChildren={expandChildren} />
    </StyledExpandedRow>
  );
};
