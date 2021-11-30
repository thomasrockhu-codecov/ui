import { TextBadgeComponent } from './components/TextBadge/TextBadge.types';

type BadgeVariants = {
  // IconBadge: IconBadgeComponent;
  // StatusBadge: StatusBadge;
  // AccountBadge: AccountBadge;
  // TooltipBadge: TooltipBadge;
};

export type BadgeComponent = TextBadgeComponent & BadgeVariants;
