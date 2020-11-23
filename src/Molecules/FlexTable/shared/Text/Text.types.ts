import { ColorFn } from '../../../../common/Types/sharedTypes';

export type TextProps = {
  className?: string;
  color?: ColorFn;
  weight?: string;
};

export type TextComponent = React.FC<TextProps>;
