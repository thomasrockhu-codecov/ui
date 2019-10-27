import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Box } from '../../..';
import {
  OptionList as DefaultList,
  Option as DefaultListItem,
} from './SingleSelectList/SingleSelectList';
import { Option as DefaultMultiselectListItem } from './MultiSelectList/MultiSelectList';

import { useSelectReducer } from './context';

import { SelectState, Action, ActionTypes, OptionBase } from './Select.types';

const getLabelOrPlaceholder = <T extends OptionBase>(state: any) => {
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
// FIXME
// Need to upgrade to ts@3.5+
// Then it can be written as
// ActionTypes = {} as const
export const defaultActionTypes: Record<ActionTypes, ActionTypes> = {
  'Select.Open': 'Select.Open' as 'Select.Open',
  'Select.Close': 'Select.Close' as 'Select.Close',
  'Select.Toggle': 'Select.Toggle' as 'Select.Toggle',
  'Select.SelectValue': 'Select.SelectValue' as 'Select.SelectValue',
  'Select.DeselectValue': 'Select.DeselectValue' as 'Select.DeselectValue',
  'Select.SyncState': 'Select.SyncState' as 'Select.SyncState',
};

export const defaultComponents = {
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(({ index }, ref) => {
    const [state] = useSelectReducer();
    const option = state.context.options[index];
    const selected = state.context.selectedItems.includes(option);
    const focused = state.context.itemFocusIdx === index;

    return (
      <DefaultListItem
        ref={ref}
        selected={selected}
        disabled={option.disabled}
        label={option.label}
        value={option.value}
        focused={focused}
      />
    );
  }),
  MultiSelectListItem: React.forwardRef<HTMLDivElement, { index: number }>(({ index }, ref) => {
    const [state] = useSelectReducer();
    const option = state.context.options[index];
    const selected = state.context.selectedItems.includes(option);

    return (
      <DefaultMultiselectListItem
        ref={ref}
        selected={selected}
        disabled={option.disabled}
        label={option.label}
        value={option.value}
      />
    );
  }),
  List: DefaultList,
  SelectedValue: () => {
    const [state] = useSelectReducer();
    return (
      <StyledFlexedBox px={2}>
        <EllipsizingText>{getLabelOrPlaceholder(state)}</EllipsizingText>
      </StyledFlexedBox>
    );
  },
};

export const useComponentsWithDefaults = (components: any = {}) => {
  return React.useMemo(
    () =>
      // @ts-ignore
      R.pipe(
        // @ts-ignore
        R.map(componentRefFn =>
          typeof componentRefFn !== 'function'
            ? componentRefFn
            : React.forwardRef(componentRefFn as any),
        ),
        R.mergeRight(defaultComponents),
      )(components),
    [components],
  );
};
