import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { Props, StyledFlexboxProps } from './Avatar.types';

import { Flexbox, Typography } from '../..';
import { isFunction } from '../../common/utils';

const getSize = (p: StyledProps<Props>) => {
  switch (p.size) {
    case 's':
      return p.theme.spacing.unit(6);
    case 'l':
      return p.theme.spacing.unit(14);
    case 'm':
    default:
      return p.theme.spacing.unit(8);
  }
};

const StyledFlexbox = styled(Flexbox)<StyledFlexboxProps>`
  background-color: ${({ theme, $backgroundColor }) =>
    isFunction($backgroundColor) ? $backgroundColor(theme) : theme.color.backgroundDark};
  width: ${getSize}px;
  height: ${getSize}px;
  font-size: ${getSize}px;
  border-radius: 50%;
`;

const fontSize = (size: 's' | 'm' | 'l') => {
  switch (size) {
    case 's':
      return 'caption';
    case 'l':
      return 'title3';
    case 'm':
    default:
      return 'tertiary';
  }
};

export const Avatar: React.FunctionComponent<Props> = ({
  children,
  size = 'm',
  backgroundColor,
}) => (
  <StyledFlexbox
    $backgroundColor={backgroundColor}
    container
    alignItems="center"
    justifyContent="center"
    size={size}
  >
    <Typography type={fontSize(size)} weight="regular" color={(t) => t.color.textLight}>
      {children}
    </Typography>
  </StyledFlexbox>
);
