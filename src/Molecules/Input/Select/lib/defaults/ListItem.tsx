import * as React from 'react';
import { useSelectMachineFromContext } from '../context';
import { Option } from '../SingleSelectList/SingleSelectList';
import { Option as OptionType } from '../../Select.types';

export const ListItem: React.FC<{
  index: number;
  option: OptionType;
  onClick: React.MouseEventHandler;
}> = ({ index, option }) => {
  const [state] = useSelectMachineFromContext();
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');

  const focused = state.context.itemFocusIdx === index;
  const selected = option.options
    ? false
    : state.context.selectedItems.includes(option) ||
      state.context.selectedItems.some(
        (x) => x.value === option.value || x.options?.some((y: any) => y.value === option.value),
      );

  return option.options ? (
    <p>{option.label}</p>
  ) : (
    <Option
      selected={selected}
      disabled={option.disabled}
      label={option.label}
      value={option.value}
      focused={focused}
      isKeyboardNavigation={isKeyboardNavigation}
    />
  );
};
