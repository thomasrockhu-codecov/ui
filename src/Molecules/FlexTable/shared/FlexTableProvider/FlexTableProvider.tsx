import React from 'react';
import { FlexTableProviderComponent, FlexTableState } from './FlexTableProvider.types';

export const FlexTableContext = React.createContext<FlexTableState | undefined>(undefined);

export const FlexTableProvider: FlexTableProviderComponent = ({
  children,
  density,
  fontSize,
  stickyHeader,
}) => (
  <FlexTableContext.Provider value={{ density, stickyHeader, fontSize }}>
    {children}
  </FlexTableContext.Provider>
);
