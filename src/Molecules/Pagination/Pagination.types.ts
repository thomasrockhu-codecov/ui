type PartialKeys<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

type PaginationPropsBase = {
  variant: 'regular' | 'large' | 'compact';
  currentPage?: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange?: (newPage: number) => void;
  label?: string;
  nextPageLabel?: string;
  previousPageLabel?: string;
  currentPageLabel?: string;
  pageItemLabel?: string;
  getPageHref?: (pageNumber: number) => string;
};

interface WithGetPageHref {
  getPageHref: NonNullable<PaginationPropsBase['getPageHref']>;
}

interface WithOnPageChange {
  onPageChange: NonNullable<PaginationPropsBase['onPageChange']>;
}

export type PaginationProps = PaginationPropsBase & (WithGetPageHref | WithOnPageChange);

export type PageItemProps = {
  isCurrentPage?: boolean;
  onClick?: () => void;
  children: React.ReactText;
  label: string;
  href?: string;
};

export type PageItemsProps = {
  currentPage: number;
  numberOfPages: number;
  onClickPageItem: (newPage: number) => void;
  PageItem: React.FC<PageItemProps>;
  TruncatedPageNumbers: React.FC;
  currentPageLabel: string;
  pageItemLabel: string;
  getPageHref?: PaginationPropsBase['getPageHref'];
};

export type BrowseButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  label: string;
};

export type BrowseLinkProps = PartialKeys<BrowseButtonProps, 'onClick'> & {
  href: NonNullable<PageItemProps['href']>;
};

export type PaginationCompactProps = {
  currentPage: number;
  numberOfPages: number;
  onClickPrevious: BrowseButtonProps['onClick'];
  onClickNext: BrowseButtonProps['onClick'];
  nextPageLabel: string;
  previousPageLabel: string;
};

export type PaginationDefaultProps = PaginationCompactProps & {
  onClickPageItem: PageItemsProps['onClickPageItem'];
  currentPageLabel: string;
  pageItemLabel: string;
};

export type PaginationCompactLinkProps = PartialKeys<
  PaginationCompactProps,
  'onClickPrevious' | 'onClickNext'
> &
  WithGetPageHref;

export type PaginationDefaultLinkProps = PartialKeys<
  PaginationDefaultProps,
  'onClickPrevious' | 'onClickNext' | 'onClickPageItem'
> &
  WithGetPageHref;
