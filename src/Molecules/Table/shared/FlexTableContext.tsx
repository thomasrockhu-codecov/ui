import React from 'react';
import { ColumnProps, UpdateContextProps } from './FlexTableContext.types';

export const FlexTableContext = React.createContext<UpdateContextProps & ColumnProps>({});
