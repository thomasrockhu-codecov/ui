import * as React from 'react';
import styled from 'styled-components';

import { useSelectMachineFromContext } from '../context';
import { Option } from '../../Select.types';

const StyledListItemWrapper = styled.li`
  width: 100%;
  outline: none;
`;

type ListItemComponent = React.ComponentType<{ index: number; option: any }>;

export const ListItemWrapper = React.forwardRef<
  HTMLLIElement,
  {
    component: ListItemComponent;
    option: Option;
    index: number;
    onClick: (option: any) => React.MouseEventHandler;
    id: string;
  }
>((props, ref): any => {
  const [current] = useSelectMachineFromContext();
  const selected = (option: any) =>
    option.options
      ? false
      : current.context.selectedItems.includes(option) ||
        current.context.selectedItems.some(
          (x) => x.value === option.value || x.options?.some((y: any) => y.value === option.value),
        );

  const allOptions = [props.option].concat(props.option.options ? props.option.options : []);

  const Component = props.component;
  return allOptions.map((option, childIndex) => (
    <StyledListItemWrapper
      ref={ref}
      onClick={props.onClick(option)}
      role="option"
      aria-selected={selected(option)}
      aria-disabled={option.disabled}
      id={`${props.id}-option-${props.index}-${childIndex}`}
      // This tabIndex needed for focus and blur
      // during onClick to behave correctly
      tabIndex={0}
    >
      <Component index={props.index} option={option} />
    </StyledListItemWrapper>
  ));
});
