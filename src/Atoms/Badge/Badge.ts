import { BadgeComponent } from './Badge.types';
import { TextBadge, LabelBadge, IconBadge, StatusBadge } from './components';

// Typecasts to attach sub badge components below
export const Badge = TextBadge as BadgeComponent;

Badge.IconBadge = IconBadge;
Badge.StatusBadge = StatusBadge;
Badge.LabelBadge = LabelBadge;
