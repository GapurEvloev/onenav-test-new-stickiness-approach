import React from 'react';
import { GlobalNavigationContainer } from './styles';
import GlobalNavigationRow from './components/GlobalNavigationRow';
import { GlobalNavigationConfig } from './types';

const GlobalNavigation: React.FC<GlobalNavigationConfig> = ({ rows }) => {
  return (
    <GlobalNavigationContainer>
      {rows?.map((row, index) => (
          <GlobalNavigationRow key={index} {...row} />
      ))}
    </GlobalNavigationContainer>
  );
};

export default GlobalNavigation;
