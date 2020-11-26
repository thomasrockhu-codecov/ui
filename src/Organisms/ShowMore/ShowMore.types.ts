export type ContainerProps = {
  showMoreButton: boolean;
  showMoreClicked: boolean;
  cutoffHeight: number;
};

export type Props = {
  cutoffHeight?: number;
  showMoreText: string;
  onShowMore?: React.MouseEventHandler;
};
