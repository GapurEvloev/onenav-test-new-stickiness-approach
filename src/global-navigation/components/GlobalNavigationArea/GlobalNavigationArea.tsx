import React, { memo } from 'react';
import { Clickable } from '../Clickable';
import { GlobalNavigationAreaContainer } from './styles';
import { ClickableAreaConfig } from '../../types';

const GlobalNavigationArea: React.FC<ClickableAreaConfig> = memo(({ items, ...rest }) => (
  <GlobalNavigationAreaContainer {...rest}>
    {items.map((item, index) => (
      <Clickable key={index} as={item.as} href={item.url || '#'}>
        {item.label}
      </Clickable>
    ))}
  </GlobalNavigationAreaContainer>
));

export default GlobalNavigationArea;