import React from 'react';
import { GlobalNavigationContainer } from './styles';
import GlobalNavigationRow from './components/GlobalNavigationRow';
import { GlobalNavigationConfig } from './types';
import useElementPosition from "./useScrollPosition.tsx";

const sentinelStyle: React.CSSProperties = {
  width: "100%",
  height: 1,
  marginBottom: -1,
  visibility: "hidden"
};

const GlobalNavigation: React.FC<GlobalNavigationConfig> = ({ rows }) => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = React.useState<number>(0);
  const position = useElementPosition(sentinelRef);

  React.useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef.current]);

  return (
    <>
      <div ref={sentinelRef} style={{...sentinelStyle, height: navHeight+'px',}} />
      <GlobalNavigationContainer ref={navRef}>
        {rows?.map((row, index) => (
            <GlobalNavigationRow key={index} {...row} position={position} />
        ))}
      </GlobalNavigationContainer>
    </>
  );
};

export default GlobalNavigation;
