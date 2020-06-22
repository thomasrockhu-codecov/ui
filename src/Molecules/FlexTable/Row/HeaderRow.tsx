import React from 'react';
import Row from './Row';
import { HeaderRowComponent } from './Row.types';

export const HeaderRow: HeaderRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = theme => theme.color.text,
  children,
  ...htmlProps
}) => {
  return (
    <Row
      className={className}
      hoverHighlight={false}
      hideSeparator={hideSeparator}
      separatorColor={separatorColor}
      {...htmlProps}
    >
      {children}
    </Row>
  );
};
