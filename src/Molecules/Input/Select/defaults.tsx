import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Box, Icon } from '../../..';
import {
  OptionList as DefaultList,
  Option as DefaultListItem,
} from './SingleSelectList/SingleSelectList';
import {
  Option as DefaultMultiselectListItem,
  OptionList as DefaultMultiselectList,
} from './MultiSelectList/MultiSelectList';

import { useSelectMachineFromContext } from './context';

import { OptionBase } from './Select.types';
import { assert } from '../../../common/utils';
import { Text } from '../Text';
import { visuallyHiddenCss } from '../../../Atoms/VisuallyHidden';

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

const StyledInputText = styled(Text)`
  ${p => (p.hidden ? `${visuallyHiddenCss}` : '')}
`;
const Search = React.forwardRef((_, ref) => {
  const [state, send] = useSelectMachineFromContext();
  const searchQuery = state.context.searchQuery;
  const showSearch = state.context.showSearch;
  const itemFocusIdx = state.context.itemFocusIdx;
  const id = state.context.id;
  const hidden = !showSearch;
  const handleChange = e => send({ type: 'SEARCH_QUERY_UPDATE', payload: e.target.value });

  return (
    <Box px={3} my={hidden ? 0 : 2} mb={hidden ? 0 : 1}>
      <StyledInputText
        leftAddon={<Icon.Search size={4} />}
        label="Search"
        ref={ref}
        data-testid="search-input-select"
        size="s"
        hideLabel
        aria-activedescendant={`${id}-option-${itemFocusIdx}`}
        width="100%"
        hidden={hidden}
        value={searchQuery}
        onChange={handleChange}
        id={`${id}-search`}
      />
    </Box>
  );
});
export const defaultComponents = {
  Search,
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(
    ({ index, isKeyboardNavigation }, ref) => {
      const [state] = useSelectMachineFromContext();
      const option = state.context.visibleOptions[index];
      const selected =
        state.context.selectedItems.includes(option) ||
        state.context.selectedItems.some(x => x.value === option.value);
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
  Search,
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(
    ({ index, isKeyboardNavigation }, ref) => {
      const [state] = useSelectMachineFromContext();
      const option = state.context.visibleOptions[index];
      const selected =
        state.context.selectedItems.includes(option) ||
        state.context.selectedItems.some(x => x.value === option.value);
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

  List: DefaultMultiselectList,
  SelectedValue: () => {
    React.useEffect(() => {
      assert(
        false,
        'Input.Select: You probably want to redefine default SelectedValue message for your case.',
      );
    }, []);

    return (
      <StyledFlexedBox px={2}>
        <EllipsizingText>Put logic for how to present multiple selection here</EllipsizingText>
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
