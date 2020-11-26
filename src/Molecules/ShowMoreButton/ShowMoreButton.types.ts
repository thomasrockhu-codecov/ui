export type ShowMoreButtonComponent = {
  onClick?: (e: React.MouseEvent) => void;
  expanded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  align?: 'left' | 'center';
  showMoreText: string;
  showLessText?: string;
};
