import React from 'react';
import Row from './Row';
import { RowComponent } from './Row.types';

export const HeaderRow: RowComponent = ({
  className,
  hoverHighlight = false,
  hideSeparator = false,
  separatorColor = theme => theme.color.text,
  children,
  ...htmlProps
}) => {
  return (
    <Row
      className={className}
      hoverHighlight={hoverHighlight}
      hideSeparator={hideSeparator}
      separatorColor={separatorColor}
      {...htmlProps}
    >
      {children}
    </Row>
  );
};
