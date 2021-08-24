import React from 'react';
import { Option } from '../MultiSelectList/MultiSelectList';

import { useSelectMachineFromContext } from '../context';
import { SYMBOL_ALL } from '../constants';

export const ListItem = ({ index }: { index: number }) => {
  const [state] = useSelectMachineFromContext();
  const { fullscreenOnMobile } = state.context;
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
  const option = state.context.visibleOptions[index];

  if (!option) {
    return null;
  }

  const selected =
    state.context.selectedItems.includes(option) ||
    state.context.selectedItems.some((x) => x.value === option.value);
  const focused = state.context.itemFocusIdx === index;
  const selectAll = option[SYMBOL_ALL];

  return (
    <Option
      selected={selected}
      disabled={option.disabled}
      label={option.label}
      value={option.value}
      focused={focused}
      selectAll={selectAll}
      isKeyboardNavigation={isKeyboardNavigation}
      fullscreenOnMobile={fullscreenOnMobile}
    />
  );
};
