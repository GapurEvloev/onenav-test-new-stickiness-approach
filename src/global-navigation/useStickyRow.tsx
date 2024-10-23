import { useEffect, useState } from 'react';
import {ResponsiveSetting, Breakpoints, breakpointSizes} from './types';
import { Position } from './useScrollPosition';
import throttle from "lodash.throttle";

const getActiveBreakpoint = (breakpoints: ResponsiveSetting<boolean | number>, windowWidth: number): Breakpoints => {
  return (Object.keys(breakpoints) as Breakpoints[])
    .filter(breakpoint => Number(breakpointSizes[breakpoint].replace(/[^0-9.]+/g, '')) <= windowWidth)
    .sort((a, b) => Number(breakpointSizes[b].replace(/[^0-9.]+/g, '')) - Number(breakpointSizes[a].replace(/[^0-9.]+/g, '')))[0] || Breakpoints.SM;
};

const getHideThreshold = (
  hideOnScroll: ResponsiveSetting<boolean | number> | boolean | number, 
  scrollY: number
): boolean => {
  if (typeof hideOnScroll === 'boolean') {
    return hideOnScroll && scrollY >= 300;
  }
  if (typeof hideOnScroll === 'number') {
    return scrollY >= hideOnScroll;
  }
  if (typeof hideOnScroll === 'object') {
    const activeBreakpoint = getActiveBreakpoint(hideOnScroll, window.innerWidth);
    const threshold = hideOnScroll[activeBreakpoint];
    console.log({activeBreakpoint, threshold});
    if (typeof threshold === 'number') {
      return scrollY >= threshold;
    }
    return !!threshold && scrollY >= 300;
  }
  return false;
};

export const useStickyRow = (
  position: Position, 
  hideOnScroll: ResponsiveSetting<boolean | number> | boolean | number
): string => {
  const [stickyClassName, setStickyClassName] = useState('');
  const { scrollY, direction } = position;

  useEffect(() => {
    const handleResize = throttle(() => {
      console.log(hideOnScroll, scrollY);
      const isHidden = getHideThreshold(hideOnScroll, scrollY) && direction === 'down';
      setStickyClassName(isHidden ? 'sticky-hidden' : 'sticky-visible');
    }, 300);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, [hideOnScroll, scrollY, direction]);

  return stickyClassName;
};
