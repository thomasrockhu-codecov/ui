import { BadgeComponent } from './Badge.types';
import {
  NotificationBadge,
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
Badge.Notification = NotificationBadge;
Badge.Account = AccountBadge;
Badge.Tooltip = TooltipBadge;
