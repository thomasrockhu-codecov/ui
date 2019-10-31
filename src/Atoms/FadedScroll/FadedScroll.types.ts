export type InternalProps = {
  intersectionOnScreen?: boolean;
};

export type Props = {
  /** You can provide a maxHeight to the component or let this component take all available space of parent and if the content exceeds that hight then the scrollbar will appear.
   */
  maxHeight?: string | number;
  /** @default 13 units */
  fadeHeight?: string | number;
  /** ⚠️Warning, you will most likely have double scrollbars on the page which is bad UX. This could still be valid in cases like Modal where the page scrollbar is locked when open,
   * @default false
   */
  enableMobileFade?: boolean;
};

export type Component = React.FC<Props>;
