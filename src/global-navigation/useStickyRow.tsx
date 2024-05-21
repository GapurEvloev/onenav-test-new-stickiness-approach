import { useEffect, useState } from 'react';
import { ResponsiveSetting } from './types';
import { Position } from './useScrollPosition';

export const useStickyStyles = (
  position: Position,
  hideOnScroll?: ResponsiveSetting<boolean | number> | boolean | number
) => {
  const [styles, setStyles] = useState('');
  const { scrollY, direction } = position;
  
  useEffect(() => {
    const getHideThreshold = (
      hideOnScroll: ResponsiveSetting<boolean | number> | boolean | number
    ) => {
      return typeof hideOnScroll === 'number' ? hideOnScroll : 300;
    };
    
    const isHidden =
      hideOnScroll &&
      scrollY >= getHideThreshold(hideOnScroll) &&
      direction === 'down';
    
    setStyles(
      isHidden
        ? `
      grid-template-rows: 0fr;
      border-bottom: none;
    `
        : `
      grid-template-rows: 1fr;
      border-bottom: 1px solid #c0c0c0;
    `
    );
  }, [scrollY, direction, hideOnScroll]);
  
  return styles;
};
