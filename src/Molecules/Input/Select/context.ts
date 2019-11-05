import * as React from 'react';
import { useMachine } from '@xstate/react';
import { SelectMachine } from './machine';

const typehack = () => useMachine(SelectMachine); // eslint-disable-line react-hooks/rules-of-hooks
export type ContextType = ReturnType<typeof typehack>;
export const SelectStateContext = React.createContext<ContextType | undefined>(undefined);

export const useSelectMachineFromContext = () => React.useContext(SelectStateContext)!;
