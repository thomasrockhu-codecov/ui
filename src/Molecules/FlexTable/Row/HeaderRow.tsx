import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { HeaderRowComponent } from './Row.types';
import { ColorFn } from '../../../common/Types/sharedTypes';

const StyledHeaderRow = styled(Row).withConfig({
  shouldForwardProp: prop => !['hideSeparator', 'separatorColor', 'sticky'].includes(prop),
})<{
  hideSeparator: boolean;
  separatorColor: ColorFn;
  sticky: boolean;
}>`
  ${p => (p.sticky ? 'position: sticky;' : '')}
`;

export const HeaderRow: HeaderRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = theme => theme.color.text,
  sticky = true,
  children,
  ...htmlProps
}) => {
  return (
    <StyledHeaderRow
      className={className}
      hoverHighlight={false}
      hideSeparator={hideSeparator}
      separatorColor={separatorColor}
      sticky={sticky}
      {...htmlProps}
    >
      {children}
    </StyledHeaderRow>
  );
};
