type SelectionCard = {
  text: string | React.ReactNode;
  onChange: () => void;
  horizontal?: boolean;
  icon?: React.ReactNode;
  imageUrl?: string;
  tag?: string;
  title?: string | React.ReactNode;
  border?: boolean;
  disabled?: boolean;
  error?: boolean;
  imageAlt?: string;
  selected?: boolean;
  outline?: boolean;
};

export type SelectionCardComponent = React.FC<SelectionCard>;
