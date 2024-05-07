import { ElementType, RefObject } from 'react';

export enum Breakpoints {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl'
}

export const breakpointSizes: Record<Breakpoints, string> = {
  [Breakpoints.SM]: '0px', // Default mobile first
  [Breakpoints.MD]: '320px', // Represents medium devices and up
  [Breakpoints.LG]: '768px', // Represents large devices and up
  [Breakpoints.XL]: '1024px', // Extra large devices
  [Breakpoints.XXL]: '1280px', // Bigger than XL
  [Breakpoints.XXXL]: '1600px' // Bigger than XXL
};

export const mediaQueries: Record<Breakpoints, string> = {
  [Breakpoints.SM]: `(min-width: ${breakpointSizes[Breakpoints.SM]})`,
  [Breakpoints.MD]: `(min-width: ${breakpointSizes[Breakpoints.MD]})`,
  [Breakpoints.LG]: `(min-width: ${breakpointSizes[Breakpoints.LG]})`,
  [Breakpoints.XL]: `(min-width: ${breakpointSizes[Breakpoints.XL]})`,
  [Breakpoints.XXL]: `(min-width: ${breakpointSizes[Breakpoints.XXL]})`,
  [Breakpoints.XXXL]: `(min-width: ${breakpointSizes[Breakpoints.XXXL]})`
};

export type VisibilityOptions =
    | boolean
    | 'none'
    | 'flex'
    | 'grid'
    | 'block'
    | 'inline';

export type ResponsiveSetting<T> = {
  [key in Breakpoints]?: T;
};

export enum Alignment {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch'
}

export enum Variant {
  SIMPLE_CLICKABLE = 'simple-clickable',
  DROPDOWN_BUTTON = 'dropdown-button',
  LINK = 'link',
  LINK_BUTTON = 'link-button',
  ICON_BUTTON = 'icon-button',
  MENU = 'menu',
  LOGO = 'logo',
  DIVIDER = 'divider'
}

// cssRowConfigProps TypeScrypt
export enum CssRowConfigProps {
  columns = 'grid-template-columns',
  visibility = 'display',
  order = 'order',
  size = 'width',
  justifyContent = 'justify-content',
  justifyItems = 'justify-items',
  alignItems = 'align-items',
  alignContent = 'align-content',
  gap = 'gap',
  autoFlow = 'grid-auto-flow',
  templateAreas = 'grid-template-areas'
}

// cssAreaConfigProps TypeScrypt
export enum CssAreaConfigProps {
  areaName = 'grid-area',
  visibility = 'display',
  order = 'order',
  gridColumn = 'grid-column',
  justifyContent = 'justify-content',
  justifyItems = 'justify-items',
  justifySelf = 'justify-self',
  alignItems = 'align-items',
  alignContent = 'align-content',
  gap = 'gap'
}

// Consolidate shared breakpoint-related types
export type BreakpointVisibility = {
  [key in Breakpoints]: boolean;
};

export type Cols = {
  [key in Breakpoints]?: string | number;
};

type Source = 'primaryLinks' | 'secondaryLinks';

type ItemDefaults = {
  variant?: Variant;
};

type Transformer = {
  source: Source;
  strategy: string; // for future, tbd - could be a union of possible strategies
  itemDefaults: ItemDefaults;
};

export type ClickableConfig = {
  as: ElementType;
  variant?: Variant;
  url?: string;
  label?: string;
};

export type ClickableAreaConfig = {
  areaName?: string;
  visibility?: ResponsiveSetting<VisibilityOptions> | VisibilityOptions;
  order?: ResponsiveSetting<number> | number;
  gridColumn?: ResponsiveSetting<string> | string;
  justifyContent?: ResponsiveSetting<Alignment> | Alignment;
  justifyItems?: ResponsiveSetting<Alignment> | Alignment;
  justifySelf?: ResponsiveSetting<Alignment> | Alignment;
  alignItems?: ResponsiveSetting<Alignment> | Alignment;
  alignContent?: ResponsiveSetting<Alignment> | Alignment;
  gap?: ResponsiveSetting<string> | string;
  transformer: Transformer;
  items: ClickableConfig[];
  id?: string;
  className?: string;
};

export type GlobalNavigationRowConfig = {
  columns?: ResponsiveSetting<string> | string;
  visibility?: ResponsiveSetting<VisibilityOptions> | VisibilityOptions; // Could be expanded into a more complex type for handling breakpoints
  sticky?: ResponsiveSetting<boolean> | boolean;
  order?: ResponsiveSetting<number> | number;
  size?: ResponsiveSetting<string> | string;
  justifyContent?: ResponsiveSetting<Alignment> | Alignment;
  justifyItems?: ResponsiveSetting<Alignment> | Alignment;
  alignItems?: ResponsiveSetting<Alignment> | Alignment;
  alignContent?: ResponsiveSetting<Alignment> | Alignment;
  gap?: ResponsiveSetting<string> | string;
  autoFlow?: ResponsiveSetting<'row' | 'column'> | 'row' | 'column';
  templateAreas?: ResponsiveSetting<string[]> | string[];
  areas: ClickableAreaConfig[];
  id?: string;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
};

export type GlobalNavigationConfig = {
  rows: GlobalNavigationRowConfig[];
};
