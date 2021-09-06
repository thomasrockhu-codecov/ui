export type ContainerProps = {
  showMoreButton: boolean;
  showMoreClicked: boolean;
  cutoffHeight: number;
  ellipsis?: boolean;
  linesToClamp?: number;
};

export type Props = {
  cutoffHeight?: number;
  showMoreText: string;
  onShowMore?: React.MouseEventHandler;
  ellipsis?: boolean;
  linesToClamp?: number;
};
