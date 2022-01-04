import { IconBadgeComponent } from './components/IconBadge/IconBadge.types';
import { LabelBadgeComponent } from './components/LabelBadge/LabelBadge.types';
import { StatusBadgeComponent } from './components/StatusBadge/StatusBadge.types';
import { NotificationBadgeComponent } from './components/NotificationBadge/NotificationBadge.types';
import { BaseBadgeComponent } from './components/BaseBadge/BaseBadge.types';
import { AccountBadgeComponent } from './components/AccountBadge/AccountBadge.types';
import { TooltipBadgeComponent } from './components/TooltipBadge/TooltipBadge.types';

type BadgeVariants = {
  Label: LabelBadgeComponent;
  Icon: IconBadgeComponent;
  Status: StatusBadgeComponent;
  Notification: NotificationBadgeComponent;
  Account: AccountBadgeComponent;
  Tooltip: TooltipBadgeComponent;
};

export type BadgeComponent = BaseBadgeComponent & BadgeVariants;
