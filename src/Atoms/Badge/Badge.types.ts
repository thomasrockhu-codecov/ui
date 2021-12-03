import { IconBadgeComponent } from './components/IconBadge/IconBadge.types';
import { StatusBadgeComponent } from './components/StatusBadge/StatusBadge.types';
import { TextBadgeComponent } from './components/TextBadge/TextBadge.types';

type BadgeVariants = {
  IconBadge: IconBadgeComponent;
  StatusBadge: StatusBadgeComponent;
  // AccountBadge: AccountBadge;
  // TooltipBadge: TooltipBadge;
};

export type BadgeComponent = TextBadgeComponent & BadgeVariants;
