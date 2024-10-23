import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

type Stickiness = boolean | number;

interface RowConfig {
  stickiness: Stickiness;
  content: React.ReactNode;
}

interface StyledRowProps {
  isSticky: boolean;
  topOffset: number;
}

const StyledRow = styled.div<StyledRowProps>`
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'static')};
  top: ${({ isSticky, topOffset }) => (isSticky ? `${topOffset}px` : 'auto')};
  background-color: #fff;
    color: #000;
  z-index: ${({ isSticky }) => (isSticky ? 1000 : 'auto')};
  /* Additional styles */
    height: 100px;
    
    &:not(:last-child) {
        border-bottom: 1px solid #000;
    }
    
    transition: transform 0.3s ease-in-out;
`;

export const Navigation: React.FC<{ rows: RowConfig[] }> = ({ rows }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [stickyStates, setStickyStates] = useState<boolean[]>(() =>
    rows.map((row) => (typeof row.stickiness === 'boolean' ? row.stickiness : false))
  );
  const rowRefs = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const newStickyStates = rows.map((row) => {
      const { stickiness } = row;
      
      if (typeof stickiness === 'boolean') {
        return stickiness;
      } else if (typeof stickiness === 'number') {
        if (stickiness > 0) {
          return scrollY <= stickiness;
        } else {
          return scrollY >= Math.abs(stickiness);
        }
      }
      return false;
    });
    
    setStickyStates(newStickyStates);
  }, [scrollY, rows]);
  
  const [offsets, setOffsets] = useState<number[]>([]);
  
  useEffect(() => {
    const newOffsets: number[] = [];
    let accumulatedOffset = 0;
    
    rows.forEach((_, index) => {
      const isSticky = stickyStates[index];
      if (isSticky && rowRefs.current[index]) {
        newOffsets[index] = accumulatedOffset;
        accumulatedOffset += rowRefs.current[index].offsetHeight;
      } else {
        newOffsets[index] = 0;
      }
    });
    
    setOffsets(newOffsets);
  }, [stickyStates, rows]);
  
  return (
    <>
      {rows.map((row, index) => (
        <StyledRow
          key={index}
          isSticky={stickyStates[index]}
          topOffset={offsets[index]}
          ref={(el) => {
            if (el) {
              rowRefs.current[index] = el;
            }
          }}
        >
          {row.content}
        </StyledRow>
      ))}
    </>
  );
};