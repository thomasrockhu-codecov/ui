import * as React from 'react';
import styled from 'styled-components';
import { useSelectMachineFromContext } from '../context';
import { List } from '../../../../..';

const getFocusedActionIdx = (optionsCount: number, currentIdx: number | null) =>
  currentIdx === null || currentIdx < optionsCount ? null : currentIdx - optionsCount;

const StyledList = styled(List)<any>`
  list-style: none;
`;
const StyledLi = styled.li`
  outline: none;
`;

export const ActionsWrapper: React.FC<{
  onClickFactory: (action: any) => (event: React.MouseEvent) => void;
  component: React.ComponentType<any>;
}> = ({ onClickFactory, component: Component }) => {
  const [state] = useSelectMachineFromContext();

  const visibleOptionsCount = state.context.visibleOptions.length;
  const itemFocusIdx = state.context.itemFocusIdx;
  const id = state.context.id;
  const actionFocusIdx = getFocusedActionIdx(visibleOptionsCount, itemFocusIdx);

  const actions = state.context.actions;
  if (actions.length === 0) return null;

  const handleClick = (i: number) => (e: React.MouseEvent) => {
    if (actions[i].disabled) {
      e.preventDefault();
      return false;
    }
    return onClickFactory(actions[i])(e);
  };

  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
  return (
    <StyledList role="listbox">
      {actions?.map((a, index) => (
        // Because it has keyboard navigation from Input.Select itself
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <StyledLi
          key={a.label}
          role="menuitem"
          onClick={handleClick(index)}
          id={`${id}-action-${index}`}
          aria-disabled={a.disabled}
          aria-label={a.label}
          // This tabIndex needed for focus and blur
          // during onClick to behave correctly
          tabIndex={0}
        >
          <Component
            label={a.label}
            icon={a.icon}
            key={a.label}
            focused={index === actionFocusIdx}
            isKeyboardNavigation={isKeyboardNavigation}
            disabled={a.disabled}
          />
        </StyledLi>
      ))}
    </StyledList>
  );
};
