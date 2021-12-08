import { IconBadgeComponent } from './components/IconBadge/IconBadge.types';
import { LabelBadgeComponent } from './components/LabelBadge/LabelBadge.types';
import { StatusBadgeComponent } from './components/StatusBadge/StatusBadge.types';
import { NotificationBadgeComponent } from './components/NotificationBadge/NotificationBadge.types';
import { BaseBadgeComponent } from './components/BaseBadge/BaseBadge.types';
import { AccountBadgeComponent } from './components/AccountBadge/AccountBadge.types';

type BadgeVariants = {
  LabelBadge: LabelBadgeComponent;
  IconBadge: IconBadgeComponent;
  StatusBadge: StatusBadgeComponent;
  NotificationBadge: NotificationBadgeComponent;
  AccountBadge: AccountBadgeComponent;
  // TooltipBadge: TooltipBadge;
};

export type BadgeComponent = BaseBadgeComponent & BadgeVariants;
