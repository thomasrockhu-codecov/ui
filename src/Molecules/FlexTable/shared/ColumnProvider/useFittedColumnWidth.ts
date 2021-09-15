import { useCallback, useRef } from 'react';
import { MeasureElementWidth, MeasureElementHorizontalPadding } from '../shared.types';
import { ColumnDispatch } from './ColumnProvider.types';

export const useFittedColumnWidth = (columnDispatch: ColumnDispatch, fitContent) => {
  const dimensionsRef = useRef<{ width: number | null; padding: number | null }>({
    width: null,
    padding: null,
  });

  const measureContent: MeasureElementWidth = useCallback(
    (node) => {
      if (node !== null) {
        if (!fitContent) return;
        const oldWhiteSpace = node.style.whiteSpace;
        node.style.setProperty('white-space', 'nowrap');
        const width = Math.ceil(node.getBoundingClientRect().width);
        node.style.setProperty('white-space', oldWhiteSpace);

        if (!dimensionsRef.current.width) dimensionsRef.current.width = width;
        if (dimensionsRef.current.width && dimensionsRef.current.padding) {
          columnDispatch({
            type: 'SET_WIDTH',
            width: dimensionsRef.current.width + dimensionsRef.current.padding,
          });
        }
      }
    },
    [columnDispatch, fitContent],
  );

  const measurePadding: MeasureElementHorizontalPadding = useCallback(
    (node) => {
      if (!fitContent) return;
      if (node !== null) {
        const paddingLeft = parseInt(
          window.getComputedStyle(node).getPropertyValue('padding-left'),
          10,
        );
        const paddingRight = parseInt(
          window.getComputedStyle(node).getPropertyValue('padding-right'),
          10,
        );

        if (!dimensionsRef.current?.padding)
          dimensionsRef.current.padding = paddingLeft + paddingRight;
        if (dimensionsRef.current.width && dimensionsRef.current.padding) {
          columnDispatch({
            type: 'SET_WIDTH',
            width: dimensionsRef.current.width + dimensionsRef.current.padding,
          });
        }
      }
    },
    [columnDispatch, fitContent],
  );

  return [measurePadding, measureContent];
};
