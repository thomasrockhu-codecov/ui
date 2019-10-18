import { InjectedIntlProps } from 'react-intl';

export type Props = {
  value: number | string | null | undefined;
  onlyDate?: boolean;
  invalidValue?: string;
  intl?: InjectedIntlProps['intl'];
};

export type DateTimeComponent = React.FunctionComponent<Props>;
