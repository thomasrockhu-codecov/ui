import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { useSelectMachineFromContext, ContextType } from '../context';
import { Box } from '../../../../..';

const getLabelOrPlaceholder = (state: ContextType[0]) => {
  if (state.context.selectedItems.length === 0) return state.context.placeholder;

  const selectedOptionLabel = R.pathOr('', [0, 'label'], state.context.selectedItems);
  return selectedOptionLabel;
};

const EllipsizingText = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledFlexedBox = styled(Box)`
  width: ${p => `calc(100% - ${p.theme.spacing.unit(6)}px)`};
  display: flex;
  align-items: center;
`;

export const SelectedValue = () => {
  const [state] = useSelectMachineFromContext();
  return (
    <StyledFlexedBox px={2}>
      <EllipsizingText>{getLabelOrPlaceholder(state)}</EllipsizingText>
    </StyledFlexedBox>
  );
};
