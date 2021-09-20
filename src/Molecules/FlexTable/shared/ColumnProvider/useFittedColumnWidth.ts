import { useCallback } from 'react';
import { MeasureElementWidth } from '../shared.types';
import { ColumnDispatch } from './ColumnProvider.types';

export const useFittedColumnWidth = (columnDispatch: ColumnDispatch, fitContent: boolean) => {
  const measureContainer: MeasureElementWidth = useCallback(
    (node) => {
      if (node !== null) {
        if (!fitContent) return;
        const oldWhiteSpace = node.style.whiteSpace;
        node.style.setProperty('white-space', 'nowrap');
        const width = Math.ceil(node.getBoundingClientRect().width);
        node.style.setProperty('white-space', oldWhiteSpace);

        const paddingLeft = parseInt(
          window.getComputedStyle(node).getPropertyValue('padding-left'),
          10,
        );
        const paddingRight = parseInt(
          window.getComputedStyle(node).getPropertyValue('padding-right'),
          10,
        );

        columnDispatch({
          type: 'SET_WIDTH',
          width: width + paddingLeft + paddingRight,
        });
      }
    },
    [columnDispatch, fitContent],
  );

  return measureContainer;
};
