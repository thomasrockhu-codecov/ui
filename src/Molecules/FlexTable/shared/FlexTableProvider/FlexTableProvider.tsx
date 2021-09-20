import React from 'react';
import { FlexTableContextProps, FlexTableProviderComponent } from './FlexTableProvider.types';

export const FlexTableContext = React.createContext<FlexTableContextProps>(undefined);

export const FlexTableProvider: FlexTableProviderComponent = ({
  children,
  id,
  density,
  columnDistance,
  columnWidthProps,
  expandable,
  fontSize,
  stickyHeader,
  persistSortingOrder,
  sm,
  md,
  lg,
  xl,
}) => (
  <FlexTableContext.Provider
    value={{
      id,
      density,
      columnDistance,
      columnWidthProps,
      stickyHeader,
      fontSize,
      expandable,
      persistSortingOrder,
      sm,
      md,
      lg,
      xl,
    }}
  >
    {children}
  </FlexTableContext.Provider>
);
