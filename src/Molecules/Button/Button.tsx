import { ButtonComponentType } from './NewButton.types';
import { BaseButton, IconButton, PillButton } from './components';

export const NewButton: ButtonComponentType = {
  Base: BaseButton,
  Icon: IconButton,
  Pill: PillButton,
};

const Button = NewButton.Base;

export { Button };
