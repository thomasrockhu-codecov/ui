import React, { useContext } from 'react';
import { Row } from './Row';
import { RowComponent } from './Row.types';
import { FlexTableContext } from '../../../../dist/types/Molecules/Table/shared/FlexTableContext';

export const HeaderRow: RowComponent = ({
  className,
  hoverHighlight = false,
  hideSeparator = false,
  separatorColor = (theme) => theme.color.text,
  children,
  ...htmlProps
}) => {
  const { density } = useContext(FlexTableContext);
  return (
    <Row
      className={className}
      hoverHighlight={hoverHighlight}
      hideSeparator={hideSeparator}
      separatorColor={separatorColor}
      density={density}
      {...htmlProps}
    >
      {children}
    </Row>
  );
};
