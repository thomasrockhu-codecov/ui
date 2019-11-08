import { SYMBOL_ALL } from './lib/constants';

export type ComponentTypes = 'ListItem' | 'List' | 'SelectedValue' | 'Search' | 'Action';
export type Action = {
  label: string;
  icon?: React.ReactNode; // maybe keyof typeof Icon?
  onSelect: () => void;
  disabled?: boolean;
};

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
   * Use this only if you understand what you are doing.
   * 99% of the time you don't need this.
   * Allows you to pass custom config to underlying machine.
   */
  machineConfig?: any;
  /**
   * @default 'm'
   */
  size?: 's' | 'm';
  disabled?: boolean;
  onChange?: (newValue: Option[]) => void;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  fullWidth?: boolean;
  /**
   * For a simple Input.Select
   * width represents both FormField width and DropdownBubble width.
   * If you pass noFormField, then it's gonna be used only for DropdownBubble
   */
  width?: string;
  /**
   * Maximum height that list can be.
   */
  listMaxHeight?: string;
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
  actions?: Array<Action>;
};

export type Option = {
  [K: string]: any;
  label: string;
  value: any;
  disabled?: boolean;
  [SYMBOL_ALL]?: boolean;
};
