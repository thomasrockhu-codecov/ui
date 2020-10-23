type Option = {
  status: string;
  title: string;
  text: string;
  textConfirm: string;
  textCancel?: string;
} | null;

export type Props = {
  loading?: boolean;
  onClose: Function;
  options: Option;
  id: string;
};
