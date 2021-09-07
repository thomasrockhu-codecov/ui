import React from 'react';
import { useSelectMachineFromContext } from '../context';

export const SearchWrapper = React.forwardRef<
  HTMLInputElement,
  {
    component: React.ComponentType<any>;
  }
>(({ component: Component }, ref: React.Ref<HTMLInputElement>) => {
  const [state, send] = useSelectMachineFromContext();
  const searchQuery = state.context.searchQuery;
  const showSearch = state.context.showSearch;
  const itemFocusIdx = state.context.itemFocusIdx;
  const fullscreenOnMobile = state.context.fullscreenOnMobile;

  const visibleOptionsCount = state.context.visibleOptions.length;

  const itemInFocusType =
    itemFocusIdx !== null && itemFocusIdx + 1 > visibleOptionsCount ? 'action' : 'option';
  const itemInFocusRealIdx =
    itemInFocusType === 'action' ? itemFocusIdx! - visibleOptionsCount : itemFocusIdx;

  const id = state.context.id;
  const hidden = !showSearch;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    send({ type: 'SEARCH_QUERY_UPDATE', payload: e.target.value });

  return (
    <Component
      ref={ref}
      aria-activedescendant={`${id}-${itemInFocusType}-${itemInFocusRealIdx}`}
      data-testid="input-select-search-field"
      hidden={hidden}
      value={searchQuery}
      onChange={handleChange}
      fullscreenOnMobile={fullscreenOnMobile}
    />
  );
});
