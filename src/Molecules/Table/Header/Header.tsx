import React from 'react';
import styled from 'styled-components';
import { Props, Density } from './Header.types';
import { Flexbox, Typography } from '../../../index';
import { isElement } from '../../../common/utils';

const getDensityPaddings = (density: Density) => {
  switch (density) {
    case 's':
      return 0;
    case 'm':
      return 1;
    case 'l':
      return 2;
    default:
      return 1;
  }
};

const StyledFlexbox = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['density'].includes(prop),
})<{ density: Density }>`
  padding-top: ${p => p.theme.spacing.unit(getDensityPaddings(p.density))}px;
  padding-bottom: ${p => p.theme.spacing.unit(getDensityPaddings(p.density))}px;
`;

export const Header: React.FC<Props> = ({
  className,
  container,
  flex = '1',
  grow,
  item = true,
  order,
  shrink,
  wrap = 'nowrap',
  fontSize = 's',
  density = 'm',
  children,
  ...htmlProps
}) => {
  return (
    <StyledFlexbox
      container={container}
      flex={flex}
      grow={grow}
      item={item}
      order={order}
      shrink={shrink}
      wrap={wrap}
      className={className}
      density={density}
      role="columnheader"
      {...htmlProps}
    >
      {isElement(children) ? (
        <>{children}</>
      ) : (
        <Typography type={fontSize === 'l' ? 'secondary' : 'tertiary'} color={t => t.color.label}>
          {children}
        </Typography>
      )}
    </StyledFlexbox>
  );
};
