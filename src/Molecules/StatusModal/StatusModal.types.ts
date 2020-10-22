import { ReactNode } from 'react';

type Status = string;

type Option = {
  title: string;
  text: string;
  icon: ReactNode;
};

export type Props = {
  id: string;
  loading?: boolean;
  status?: Status;
  onClose?: Function;
  options?: Record<Status, Option>;
  buttonText: string;
};
