import { BaseButtonComponent } from './components/BaseButton/Button.types';
import { IconButtonComponent } from './components/IconButton/IconButton.types';
import { PillButtonComponent } from './components/PillButton/PillButton.types';

export type ButtonComponentType = {
  Base: BaseButtonComponent;
  Icon: IconButtonComponent;
  Pill: PillButtonComponent;
};

export type ButtonComponentKeyType = keyof ButtonComponentType;
export type ButtonComponentValueType =
  | BaseButtonComponent
  | IconButtonComponent
  | PillButtonComponent;
