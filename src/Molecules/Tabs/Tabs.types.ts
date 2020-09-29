export type ItemProps = {
  title: React.ReactNode;
  onTitleClick?: React.MouseEventHandler;
  children: React.ReactNode | React.ReactNode[];
};

export type TitleProps = {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  index: number;
  setRef: (el: HTMLButtonElement | null) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  height?: number;
};

export type ContainerProps = {
  initialActiveTabIndex?: number;
  /**
   * Using this prop will enable controlled behaviour
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  activeTabIndex?: number;
  children: React.ReactNode;
  className?: string;
  height?: number;
  TabContentWrapper?: React.ElementType;
};

export type ItemComponent = React.FC<ItemProps>;
export type TitleComponent = React.FC<TitleProps>;
export type ContainerComponent = React.FC<ContainerProps> & { Tab: ItemComponent };
