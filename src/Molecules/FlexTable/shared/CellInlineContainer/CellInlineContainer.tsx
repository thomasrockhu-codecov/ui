import React from 'react';
import styled from 'styled-components';
import { Flexbox } from '../../../..';
import { CellInlineContainerComponent } from './CellInlineContainer.types';

// inline-flex keeps Textwrapper with tooltip from not expanding row height.
// min-width: 0; Allows truncation by making us able to shrink the Flexbox smaller than child text elements.
const StyledFlexbox = styled(Flexbox)`
  display: inline-flex;
  min-width: 0;
`;

export const CellInlineContainer: CellInlineContainerComponent = ({ children, ...flexProps }) => (
  <StyledFlexbox {...flexProps}>{children}</StyledFlexbox>
);
