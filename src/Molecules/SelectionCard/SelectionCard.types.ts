type SelectionCard = {
  horizontal?: boolean;
  icon?: React.ReactNode;
  imageUrl?: string;
  tag?: string;
  text?: string | React.ReactNode;
  title?: string | React.ReactNode;
  border?: boolean;
  disabled?: boolean;
  error?: boolean;
  imageAlt?: string;
  onClick?: () => void;
  selected?: boolean;
  onChange?: () => void;
  outline?: boolean;
};

export type SelectionCardComponent = React.FC<SelectionCard>;
