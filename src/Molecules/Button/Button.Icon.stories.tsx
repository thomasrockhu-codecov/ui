import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Button, Flexbox, Icon, Pagination, PillButton } from '../..';
import { Display } from '../../common/Display';

const FALLBACK_ICON_SIZE = 16;

const allSuitableIcons = Object?.entries(Icon)
  ?.filter(([iconName, _]: [string, React.ComponentType<any>]) => iconName.match(/16$/))
  ?.sort((a, b) => a[0].localeCompare(b[0]))
  .map(([iconName, _]: [string, React.ComponentType<any>]) => ({
    iconName: (iconName?.match(/(.*?)\d+$/) || [])[1],
  }));

const getButtonSettings = (buttonComponentName: 'Button' | 'PillButton') => {
  let ButtonComponent: typeof Button | typeof PillButton;
  let buttonVariants: any[];
  let buttonSizes: any[];
  switch (buttonComponentName) {
    case 'Button':
      ButtonComponent = Button;
      buttonVariants = ['Primary', 'Secondary', 'Neutral'];
      buttonSizes = ['Small', 'Medium', 'Large'];
      break;
    case 'PillButton':
    default:
      ButtonComponent = PillButton;
      buttonVariants = ['Primary', 'Secondary'];
      buttonSizes = ['Small'];
      break;
  }
  return { ButtonComponent, buttonVariants, buttonSizes };
};

const getAvailableIconName = ({
  iconName,
  preferredSize,
}: {
  iconName: string;
  preferredSize: number;
}) => {
  const preferred = `${iconName}${preferredSize}`;
  const fallback = `${iconName}${FALLBACK_ICON_SIZE}`;
  return Icon[preferred] ? preferred : fallback;
};

const getIcon = ({ iconName, iconOutline }: { iconName: string; iconOutline: boolean }) => {
  const IconComponent = Icon[iconName];
  const style = iconOutline ? { outline: '1px dashed #bbb' } : {};
  return <IconComponent color="currentColor" style={style} />;
};

const PaginatedButtonsWithIconDisplays = ({
  iconsPerPage,
  iconOutline,
  preferredIconSizes = {},
  buttonComponentName,
}: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { ButtonComponent, buttonVariants, buttonSizes } = getButtonSettings(buttonComponentName);

  const buttonDisplays = buttonVariants.map((variant: any) => (
    <Display
      key={variant}
      title={variant}
      horizontal
      items={
        buttonSizes.map((buttonSize: any) => ({
          key: `${variant}${buttonSize}`,
          title: buttonSize,
          component: allSuitableIcons
            .slice((currentPage - 1) * iconsPerPage, currentPage * iconsPerPage)
            .map(({ iconName }) =>
              getAvailableIconName({
                iconName,
                preferredSize: preferredIconSizes[buttonSize] || FALLBACK_ICON_SIZE,
              }),
            )
            .map((iconName) => [
              <p key={`${variant}${buttonSize}${iconName}`}>
                {[undefined, 'left', 'right'].map((iconPlacement: any) => [
                  <span key={`${variant}${buttonSize}${iconName}${iconPlacement}`}>
                    <ButtonComponent
                      {...(['left', 'right'].includes(iconPlacement)
                        ? {
                            icon: getIcon({ iconName, iconOutline }),
                            iconPlacement,
                          }
                        : {})}
                      {...(ButtonComponent === Button
                        ? {
                            color: (t: any) => t.color.cta,
                            size: buttonSize[0].toLowerCase(),
                          }
                        : {})}
                      variant={variant.toLowerCase()}
                      onClick={action(`click${buttonSize}`)}
                    >
                      {iconPlacement ? iconName : buttonSize}
                    </ButtonComponent>{' '}
                  </span>,
                ])}
              </p>,
            ]),
        })) as any
      }
    />
  ));

  return (
    <>
      <Flexbox container gutter={2}>
        <Flexbox item>Icon pages:</Flexbox>
        <Pagination
          variant="regular"
          currentPage={currentPage}
          totalItems={allSuitableIcons.length}
          itemsPerPage={iconsPerPage}
          onPageChange={setCurrentPage}
        />
      </Flexbox>
      {buttonDisplays}
    </>
  );
};

const ButtonsWithIconsTemplate: Story<{
  iconOutline: boolean;
  iconsPerPage: number;
  preferredIconSizes: any;
  buttonComponentName: 'Button' | 'PillButton';
}> = ({ iconOutline, iconsPerPage, preferredIconSizes, buttonComponentName }) => {
  return (
    <PaginatedButtonsWithIconDisplays
      iconsPerPage={iconsPerPage}
      iconOutline={iconOutline}
      preferredIconSizes={preferredIconSizes}
      buttonComponentName={buttonComponentName}
    />
  );
};

export const ButtonsWithIcons = ButtonsWithIconsTemplate.bind({});
ButtonsWithIcons.args = {
  iconOutline: false,
  iconsPerPage: 5,
  preferredIconSizes: {
    Small: 16,
    Medium: 16,
    Large: 24,
  },
  buttonComponentName: 'Button',
};

ButtonsWithIcons.storyName = 'All Buttons with all Icons';

export default {
  title: 'Molecules / Button',
  component: ButtonsWithIcons,
  argTypes: {
    buttonComponentName: {
      options: ['Button', 'PillButton'],
      control: { type: 'radio' },
    },
  },
  parameters: { controls: { sort: 'alpha' } },
} as Meta;
