import React from 'react';
import { GlobalNavigationRowContainer } from './styles';
import GlobalNavigationArea from '../GlobalNavigationArea';
import { GlobalNavigationRowConfig } from '../../types';
import {useStickyStyles} from "../../useStickyRow.tsx";

export type GlobalNavigationRowProps = GlobalNavigationRowConfig & {
  position: { top: number; scrollY: number; direction: 'up' | 'down' };
}

const GlobalNavigationRow: React.FC<GlobalNavigationRowProps> = ({
  areas,
  position,
  sticky,
  ...rest
}) => {
  const rowStyles = useStickyStyles(position, sticky);
  console.log({rowStyles})
  return <GlobalNavigationRowContainer rowStyles={rowStyles} {...rest}>
    {areas.map((area, index) => (
      <GlobalNavigationArea key={index} {...area} />
    ))}
  </GlobalNavigationRowContainer>
};

export default GlobalNavigationRow;
