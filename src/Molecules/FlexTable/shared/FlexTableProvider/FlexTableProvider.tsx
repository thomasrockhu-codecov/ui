import React from 'react';
import { FlexTableProviderComponent, FlexTableState } from './FlexTableProvider.types';

export const FlexTableContext = React.createContext<FlexTableState | undefined>(undefined);

export const FlexTableProvider: FlexTableProviderComponent = ({
  children,
  density,
  stickyHeader,
}) => (
  <FlexTableContext.Provider value={{ density, stickyHeader }}>
    {children}
  </FlexTableContext.Provider>
);
