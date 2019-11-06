import { SYMBOL_ALL } from './lib/constants';

export type ComponentTypes = 'ListItem' | 'List' | 'SelectedValue' | 'Search';

export type Props = {
  /**
   * Required for proper functioning
   * If omitted will lead to buggy onClick
   */
  id: string;
  options: Option[];
  value?: any;
  error?: string;
  extraInfo?: string;
  success?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
  label: string;
  name?: string;
  /**
   * @default 'm'
   */
  size?: 's' | 'm';
  disabled?: boolean;
  onChange?: (newValue: Option[]) => void;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  fullWidth?: boolean;
  width?: string;
  className?: string;
  components?: Partial<Record<ComponentTypes, React.ComponentType<any>>>;
  /** use this flag if you
   * are using dropdown not
   * within form
   * e.g. a link with dropdown
   */
  noFormField?: boolean;
  /**
   * Auto focus this field on mount
   */
  autoFocus?: boolean;

  /**
   * Show search input before items
   */
  showSearch?: boolean;

  multiselect?: boolean;
};

export type Option = {
  [K: string]: any;
  label: string;
  value: any;
  disabled?: boolean;
  [SYMBOL_ALL]?: boolean;
};
