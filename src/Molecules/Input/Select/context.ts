import * as React from 'react';
import { Action } from './Select.types';

export const SelectStateContext = React.createContext<[any, (action: Action) => void] | null>(null);

export const useSelectReducer = () => React.useContext(SelectStateContext)!;
