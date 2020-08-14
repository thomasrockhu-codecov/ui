import { FormatDateOptions } from 'react-intl';

export type Props = {
  value: number | string | null | undefined;
  onlyDate?: boolean;
  options?: FormatDateOptions;
  invalidValue?: string;
};

export type DateTimeComponent = React.FunctionComponent<Props>;
