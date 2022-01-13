import { IconBadgeComponent } from './components/IconBadge/IconBadge.types';
import { LabelBadgeComponent } from './components/LabelBadge/LabelBadge.types';
import { StatusBadgeComponent } from './components/StatusBadge/StatusBadge.types';
import { NumberBadgeComponent } from './components/NumberBadge/NumberBadge.types';
import { BaseBadgeComponent } from './components/BaseBadge/BaseBadge.types';
import { AccountBadgeComponent } from './components/AccountBadge/AccountBadge.types';
import { TooltipBadgeComponent } from './components/TooltipBadge/TooltipBadge.types';

type BadgeVariants = {
  Label: LabelBadgeComponent;
  Icon: IconBadgeComponent;
  Status: StatusBadgeComponent;
  Number: NumberBadgeComponent;
  Account: AccountBadgeComponent;
  Tooltip: TooltipBadgeComponent;
};

export type BadgeComponent = BaseBadgeComponent & BadgeVariants;
