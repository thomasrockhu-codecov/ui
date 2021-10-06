import React, { createContext, useContext } from 'react';
import { useMachine } from '@xstate/react';
import { SelectMachine } from '../machine';

const typehack = () => useMachine(SelectMachine); // eslint-disable-line react-hooks/rules-of-hooks
export type ContextType = ReturnType<typeof typehack>;
// This component is needed only for nice a presentation of props in docs
export const PseudoComponentWithPropsConsistingOfContext: React.FC<ContextType[0]['context']> =
  () => null;
export const SelectStateContext = createContext<ContextType | undefined>(undefined);

export const useSelectMachineFromContext = () => useContext(SelectStateContext)!;
