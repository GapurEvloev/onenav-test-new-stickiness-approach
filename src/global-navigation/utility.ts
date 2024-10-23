import {
  Breakpoints,
  ResponsiveSetting,
  VisibilityOptions,
  mediaQueries
} from './types';

const createResponsiveStyles = (property: string, config: ResponsiveSetting<any> | any): string => {
  if (typeof config !== 'object') {
    return `${property}: ${config};`;
  }

  let defaultStyle = '';
  const mediaQueryStyles = Object.entries(config)
    .filter(([breakpoint]) => breakpoint !== Breakpoints.SM)
    .map(([breakpoint, value]) => `
      @media ${mediaQueries[breakpoint as Breakpoints]} {
        ${property}: ${Array.isArray(value) ? value.join(' ') : value};
      }
    `)
    .join('');

  const smValue = config[Breakpoints.SM];
  if (typeof smValue !== 'undefined') {
    defaultStyle = `${property}: ${Array.isArray(smValue) ? smValue.join(' ') : smValue};`;
  }

  return `${defaultStyle} ${mediaQueryStyles}`;
};

const createVisibilityStyles = (
  visibility: ResponsiveSetting<VisibilityOptions> | VisibilityOptions,
  defaultValue = 'flex'
): string => {
  if (typeof visibility === 'object') {
    const defaultStyle = `display: ${visibility[Breakpoints.SM] ? defaultValue : 'none'};`;
    const mediaQueryStyles = Object.entries(visibility)
      .filter(([breakpoint]) => breakpoint !== Breakpoints.SM)
      .map(([breakpoint, value]) => `
        @media ${mediaQueries[breakpoint as Breakpoints]} {
          display: ${typeof value === 'boolean' ? (value ? defaultValue : 'none') : value};
        }
      `)
      .join('');

    return `${defaultStyle} ${mediaQueryStyles}`;
  }

  return `display: ${typeof visibility === 'string' ? visibility : visibility ? defaultValue : 'none'};`;
};


export { createResponsiveStyles, createVisibilityStyles };