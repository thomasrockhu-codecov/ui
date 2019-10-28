import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Box } from '../../..';
import {
  OptionList as DefaultList,
  Option as DefaultListItem,
} from './SingleSelectList/SingleSelectList';
import { Option as DefaultMultiselectListItem } from './MultiSelectList/MultiSelectList';

import { useSelectMachineFromContext } from './context';

import { OptionBase } from './Select.types';
import { assert } from '../../../common/utils';

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

export const defaultComponents = {
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(
    ({ index, isKeyboardNavigation }, ref) => {
      const [state] = useSelectMachineFromContext();
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
          isKeyboardNavigation={isKeyboardNavigation}
        />
      );
    },
  ),

  List: DefaultList,
  SelectedValue: () => {
    const [state] = useSelectMachineFromContext();
    return (
      <StyledFlexedBox px={2}>
        <EllipsizingText>{getLabelOrPlaceholder(state)}</EllipsizingText>
      </StyledFlexedBox>
    );
  },
};

export const defaultComponentsMultiselect = {
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(
    ({ index, isKeyboardNavigation }, ref) => {
      const [state] = useSelectMachineFromContext();
      const option = state.context.options[index];
      const selected = state.context.selectedItems.includes(option);
      const focused = state.context.itemFocusIdx === index;
      const selectAll = option.all;

      return (
        <DefaultMultiselectListItem
          ref={ref}
          selected={selected}
          disabled={option.disabled}
          label={option.label}
          value={option.value}
          focused={focused}
          selectAll={selectAll}
          isKeyboardNavigation={isKeyboardNavigation}
        />
      );
    },
  ),

  List: DefaultList,
  SelectedValue: () => {
    const [state] = useSelectMachineFromContext();
    React.useEffect(() => {
      assert(
        false,
        'Input.Select: You probably want to redefine SelectedValue message for your case.',
        { level: 'warn' },
      );
    }, []);

    return (
      <StyledFlexedBox px={2}>
        <EllipsizingText>{getLabelOrPlaceholder(state)}</EllipsizingText>
      </StyledFlexedBox>
    );
  },
};

export const useComponentsWithDefaults = (
  components: any = {},
  options: { multiselect: boolean } = { multiselect: false },
) => {
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
        R.mergeRight(options.multiselect ? defaultComponentsMultiselect : defaultComponents),
      )(components),
    [components, options.multiselect],
  );
};
