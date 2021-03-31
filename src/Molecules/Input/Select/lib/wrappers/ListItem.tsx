import React from 'react';
import styled from 'styled-components';

import { useSelectMachineFromContext } from '../context';
import { Option } from '../../Select.types';

const StyledListItemWrapper = styled.li`
  width: 100%;
  outline: none;
`;

type ListItemComponent = React.ComponentType<{ index: number }>;

export const ListItemWrapper = React.forwardRef<
  HTMLLIElement,
  {
    component: ListItemComponent;
    option: Option;
    index: number;
    onClick: React.MouseEventHandler;
    id: string;
  }
>((props, ref) => {
  const [current] = useSelectMachineFromContext();
  const selected = props.option.options
    ? false
    : current.context.selectedItems.includes(props.option) ||
      current.context.selectedItems.some(
        (x) =>
          x.value === props.option.value ||
          x.options?.some((y: any) => y.value === props.option.value),
      );

  const Component = props.component;

  return (
    <StyledListItemWrapper
      ref={ref}
      onClick={props.onClick}
      role="option"
      aria-selected={selected}
      aria-disabled={props.option.disabled}
      id={`${props.id}-option-${props.index}`}
      // This tabIndex needed for focus and blur
      // during onClick to behave correctly
      tabIndex={0}
    >
      <Component index={props.index} />
    </StyledListItemWrapper>
  );
});
