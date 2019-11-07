import * as React from 'react';
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
  const selected =
    current.context.selectedItems.includes(props.option) ||
    current.context.selectedItems.some(x => x.value === props.option.value);
  const disabled = props.option.disabled;

  const Component = props.component;
  return (
    <StyledListItemWrapper
      ref={ref}
      onClick={props.onClick}
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      id={`${props.id}-option-${props.index}`}
    >
      <Component index={props.index} />
    </StyledListItemWrapper>
  );
});
