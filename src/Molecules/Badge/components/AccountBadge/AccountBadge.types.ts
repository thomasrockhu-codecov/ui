import { AccountBadgeStackComponent } from '../AccountBadgeStack/AccountBadgeStack.types';
import { ColorFn, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type AccountBadgeProps = HtmlProps & {
  children: React.ReactNode;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | number;
};

export type AccountBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & AccountBadgeProps
>;
export interface AccountBadgeCompoundComponent extends AccountBadgeComponent {
  Stack: AccountBadgeStackComponent;
}
