import React from 'react';
import { GlobalNavigationRowContainer } from './styles';
import GlobalNavigationArea from '../GlobalNavigationArea';
import { GlobalNavigationRowConfig } from '../../types';

export type GlobalNavigationRowProps = GlobalNavigationRowConfig & {
  position: { top: number; scrollY: number; direction: 'up' | 'down' };
}

const GlobalNavigationRow: React.FC<GlobalNavigationRowProps> = ({
  areas,
  ...rest
}) => {
  return <GlobalNavigationRowContainer {...rest}>
    {areas.map((area, index) => (
      <GlobalNavigationArea key={index} {...area} />
    ))}
  </GlobalNavigationRowContainer>
};

export default GlobalNavigationRow;
