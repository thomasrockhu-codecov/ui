import { ColorFn } from '../../../../common/Types';

export type TextProps = {
  className?: string;
  color?: ColorFn;
  weight?: string;
};

export type TextComponent = React.FC<TextProps>;
