export type InternalProps = {
  intersectionOnScreen?: boolean;
};

export type Props = {
  maxHeightDesktop?: string | number;
  fadeHeight?: string | number;
};

export type Component = React.FC<Props & InternalProps>;
