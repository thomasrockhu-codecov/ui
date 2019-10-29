import { Props as CardWithTitleProps } from '../../Molecules/CardWithTitle/CardWithTitle.types';

export type InternalProps = {
  bottomOfContentOnScreen?: boolean;
  hasScrollbar?: boolean;
};

export type Props = CardWithTitleProps;

export type Component = React.FC<Props>;
