import { BaseButton } from './components';

import PillButton from './components/PillButton';
import IconButton from './components/IconButton';

type HybridButtonType = typeof BaseButton & { Pill: typeof PillButton } & {
  Icon: typeof IconButton;
};

const Button = BaseButton as HybridButtonType;
Button.Pill = PillButton;
Button.Icon = IconButton;

export { Button };
