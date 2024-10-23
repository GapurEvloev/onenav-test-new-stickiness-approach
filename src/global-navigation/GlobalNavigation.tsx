import React from 'react';
import { GlobalNavigationContainer, Sentinel } from './styles';
import GlobalNavigationRow from './components/GlobalNavigationRow';
import { GlobalNavigationConfig } from './types';
import useElementPosition from './useScrollPosition';

const GlobalNavigation: React.FC<GlobalNavigationConfig> = ({
  rows,
}) => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = React.useState<number>(0);
  const position = useElementPosition(sentinelRef);

  React.useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, []);

  return (
    <>
      <Sentinel
        ref={sentinelRef}
        style={{ height: `${navHeight}px` }}
      />
      <GlobalNavigationContainer ref={navRef}>
        {rows?.map((row, index) => (
          <GlobalNavigationRow key={index} {...row} position={position}/>
        ))}
      </GlobalNavigationContainer>
    </>
  );
};

export default GlobalNavigation;