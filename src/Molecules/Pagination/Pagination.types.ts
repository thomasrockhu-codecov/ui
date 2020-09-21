export type Props = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
};

export type PageNumberItemProps = { active?: boolean; onClick?: (e: React.SyntheticEvent) => void };

export type ChevronButtonProps = {
  direction?: 'left' | 'right';
  onClick: (e: React.SyntheticEvent) => void;
};
