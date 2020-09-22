export type Props = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
};

export type DesktopPaginationProps = {
  currentPage: number;
  numberOfPages: number;
  onClickPageNumber: PageNumberItemProps['onClick'];
  onClickPrevious: ChevronButtonProps['onClick'];
  onClickNext: ChevronButtonProps['onClick'];
};

export type PageNumberItemProps = {
  active?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
};

export type ChevronButtonProps = {
  direction?: 'left' | 'right';
  onClick: (e: React.SyntheticEvent) => void;
};
