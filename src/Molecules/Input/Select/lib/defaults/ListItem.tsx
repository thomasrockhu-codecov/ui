import * as React from 'react';
import { useSelectMachineFromContext } from '../context';
import { Option } from '../SingleSelectList/SingleSelectList';

export const ListItem: React.FC<{
  index: number;
}> = ({ index }) => {
  const [state] = useSelectMachineFromContext();
  const option = state.context.visibleOptions[index];
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');

  const selected =
    state.context.selectedItems.includes(option) ||
    state.context.selectedItems.some((x) => x.value === option.value);

  const focused = state.context.itemFocusIdx === index;
  const allOptions = [option].concat(option?.options);

  return allOptions.map((option) =>
    option.options ? (
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
    ),
  );
};
