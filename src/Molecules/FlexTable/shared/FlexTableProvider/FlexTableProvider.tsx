import React from 'react';
import { FlexTableProviderComponent, FlexTableContextProps } from './FlexTableProvider.types';

export const FlexTableContext = React.createContext<FlexTableContextProps>(undefined);

export const FlexTableProvider: FlexTableProviderComponent = ({
  children,
  density,
  expandable,
  fontSize,
  stickyHeader,
  sm,
  md,
  lg,
  xl,
}) => (
  <FlexTableContext.Provider
    value={{ density, stickyHeader, fontSize, expandable, sm, md, lg, xl }}
  >
    {children}
  </FlexTableContext.Provider>
);
