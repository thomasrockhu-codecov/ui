import { BadgeComponent } from './Badge.types';
import {
  NumberBadge,
  LabelBadge,
  IconBadge,
  StatusBadge,
  AccountBadge,
  TooltipBadge,
  BaseBadge,
} from './components';

// Typecasts to attach sub badge components below
export const Badge = BaseBadge as BadgeComponent;

Badge.Icon = IconBadge;
Badge.Status = StatusBadge;
Badge.Label = LabelBadge;
Badge.Number = NumberBadge;
Badge.Account = AccountBadge;
Badge.Tooltip = TooltipBadge;
