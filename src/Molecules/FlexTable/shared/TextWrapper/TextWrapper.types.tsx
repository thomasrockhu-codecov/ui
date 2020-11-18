import { ColorFn } from '../../../../common/Types/sharedTypes';

type TextProps = {
  className?: string;
  color?: ColorFn;
  weight?: string;
};

type TextWrapperProps = TextProps & { truncate?: boolean };

export type TextComponent = React.FC<TextProps>;
export type TextWrapperComponent = React.FC<TextWrapperProps>;
