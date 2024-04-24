import { Breakpoints, breakpointSizes, ResponsiveSetting } from './types';

export const generateResponsiveStyles = (
    property: string,
    config: ResponsiveSetting<string> | string,
    defaultBreakpoint: Breakpoints
) => {
    return Object.entries(config)
        .filter(([breakpoint]) => breakpoint !== defaultBreakpoint) // Filter out the default breakpoint
        .map(
            ([breakpoint, value]) => `
      @media (min-width: ${breakpointSizes[breakpoint as Breakpoints]}) {
        ${property}: ${value};
      }
    `
        )
        .join('');
};

export const generateResponsiveVisibility = (
    visibility: ResponsiveSetting<boolean>,
    defaultBreakpoint: Breakpoints
) => {
    return Object.entries(visibility)
        .filter(([breakpoint]) => breakpoint !== defaultBreakpoint) // Filter out the default breakpoint
        .map(
            ([breakpoint, isVisible]) => `
      @media (min-width: ${breakpointSizes[breakpoint as Breakpoints]}) {
        display: ${isVisible ? 'flex' : 'none'};
      }
    `
        )
        .join('');
};

export const getVisibilityStyles = (visibility: ResponsiveSetting<boolean>) => {
    if (typeof visibility === 'object') {
        const displayStyle = visibility[Breakpoints.SM] ? 'flex' : 'none';
        const responsiveStyles = generateResponsiveVisibility(
            visibility,
            Breakpoints.SM
        );
        return `
      display: ${displayStyle};
      ${responsiveStyles}
    `;
    }

    return `display: ${visibility ? 'flex' : 'none'};`;
};
