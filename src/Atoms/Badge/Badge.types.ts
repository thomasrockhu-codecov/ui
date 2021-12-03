import { IconBadgeComponent } from './components/IconBadge/IconBadge.types';
import { LabelBadgeComponent } from './components/LabelBadge/LabelBadge.types';
import { StatusBadgeComponent } from './components/StatusBadge/StatusBadge.types';
import { TextBadgeComponent } from './components/TextBadge/TextBadge.types';

type BadgeVariants = {
  LabelBadge: LabelBadgeComponent;
  IconBadge: IconBadgeComponent;
  StatusBadge: StatusBadgeComponent;
  // AccountBadge: AccountBadge;
  // TooltipBadge: TooltipBadge;
};

export type BadgeComponent = TextBadgeComponent & BadgeVariants;
