import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Security16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.001.1l1.177.802c1.435.954 3.017 1.53 4.402 1.246l1.19-.243.01 1.215c.053 7.641-3.635 10.96-5.522 12.135l-.008.004-.122.075-.124.073-.116.065-.108.058-.099.052-.092.046-.115.055-.479.217-.54-.25-.088-.043-.094-.048-.102-.054-.11-.061-.119-.068-.125-.075-.131-.081a9.55 9.55 0 01-.069-.044l-.008-.005-.133-.088C4.52 13.766 1.169 10.405 1.22 3.12l.009-1.215 1.19.243c1.354.277 2.9-.28 4.323-1.194L8.002.1zm-.003 2.417l-.154.105-.01.006c-1.275.82-2.897 1.564-4.595 1.59.266 5.76 2.965 8.271 4.349 9.204l.116.077.048.03.104.065.095.057.049.027.009-.004.093-.055.103-.063c1.314-.82 4.276-3.291 4.555-9.337-1.735-.023-3.395-.792-4.693-1.655l-.01-.007-.059-.04z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Security16;
