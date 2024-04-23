import React from 'react';
import { GlobalNavigationRowContainer } from './styles';
import GlobalNavigationArea from '../GlobalNavigationArea';
import { GlobalNavigationRowConfig } from '../../types';

const GlobalNavigationRow: React.FC<GlobalNavigationRowConfig> = ({ areas, ...rest }) => (
    <GlobalNavigationRowContainer {...rest}>
      {areas.map((area, index) => <GlobalNavigationArea key={index} {...area} />)}
    </GlobalNavigationRowContainer>
);

export default GlobalNavigationRow;
