import { Props as CardProps } from '../../Atoms/Card/Card.types';

export type Props = {
  title: React.ReactNode;
  /** Use this prop when you intend to have the `FadedScroll` component inside this card */
  scrollable?: boolean;
} & CardProps;

export type CardWithTitleComponent = React.FunctionComponent<Props>;
