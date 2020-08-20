import { Theme } from '../../theme/theme.types';

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  query: string | ((theme: Theme) => string);
};
