import { Props as CardProps } from '../../Atoms/Card/Card.types';

export type Props = {
  padded?: boolean;
  title: React.ReactNode;
};

export type CardWithTitleComponent = React.FunctionComponent<Props & CardProps>;
