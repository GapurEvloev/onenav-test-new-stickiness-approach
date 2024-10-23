import React from 'react';
import { GlobalNavigationRowContainer } from './styles';
import GlobalNavigationArea from '../GlobalNavigationArea';
import { GlobalNavigationRowConfig } from '../../types';
import { useStickyRow } from '../../useStickyRow';

export type GlobalNavigationRowProps = GlobalNavigationRowConfig & {
  position: { top: number; scrollY: number; direction: 'up' | 'down' };
}

const GlobalNavigationRow: React.FC<GlobalNavigationRowProps> = ({
  areas,
  position,
  hideOnScroll,
  ...rest
}) => {
  const stickyClassName = useStickyRow(position, hideOnScroll);

  return (
    <GlobalNavigationRowContainer className={stickyClassName} {...rest}>
      {areas?.map((area, index) => (
        <GlobalNavigationArea key={index} {...area} />
      ))}
    </GlobalNavigationRowContainer>
  );
};

export default GlobalNavigationRow;