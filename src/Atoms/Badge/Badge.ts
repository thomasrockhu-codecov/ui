import { BadgeComponent } from './Badge.types';
import {
  NotificationBadge,
  LabelBadge,
  IconBadge,
  StatusBadge,
  AccountBadge,
  BaseBadge,
} from './components';

// Typecasts to attach sub badge components below
export const Badge = BaseBadge as BadgeComponent;

Badge.IconBadge = IconBadge;
Badge.StatusBadge = StatusBadge;
Badge.LabelBadge = LabelBadge;
Badge.NotificationBadge = NotificationBadge;
Badge.AccountBadge = AccountBadge;
