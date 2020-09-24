export type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  compact?: boolean;
  onPageChange: (newPage: number) => void;
};

export type PageItemProps = {
  active?: boolean;
  onClick?: () => void;
};

export type PageItemsProps = {
  currentPage: number;
  numberOfPages: number;
  onClickPageItem: (newPage: number) => void;
  PageItem: React.FC<PageItemProps>;
  TruncatedPageNumbers: React.FC<{}>;
};

export type BrowseButtonProps = {
  direction?: 'left' | 'right';
  onClick: () => void;
};

export type PaginationCompactProps = {
  onClickPrevious: BrowseButtonProps['onClick'];
  onClickNext: BrowseButtonProps['onClick'];
};

export type PaginationDefaultProps = PaginationCompactProps & {
  currentPage: number;
  numberOfPages: number;
  onClickPageItem: PageItemsProps['onClickPageItem'];
};
