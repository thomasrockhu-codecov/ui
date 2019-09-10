import React from 'react';
import styled from 'styled-components';
import { Props } from './Legend.types';
import { Typography } from '../..';
import { isElement } from '../../common/utils';

const StyledLegend = styled.legend`
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
  margin: 0 0 ${p => p.theme.spacing.unit(4)}px 0;
`;

export const Legend: React.FC<Props> = props => {
  const { className, children } = props;
  const titleNode = isElement(children) ? (
    children
  ) : (
    <Typography type="title3" weight="bold">
      {children}
    </Typography>
  );

  return <StyledLegend className={className}>{titleNode}</StyledLegend>;
};
