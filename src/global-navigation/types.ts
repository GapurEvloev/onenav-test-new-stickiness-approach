import { ElementType } from 'react';

export enum Breakpoints {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl'
}

export const breakpointSizes = {
  [Breakpoints.SM]: '0px', // Default mobile first
  [Breakpoints.MD]: '320px', // Represents medium devices and up
  [Breakpoints.LG]: '768px', // Represents large devices and up
  [Breakpoints.XL]: '1024px', // Extra large devices
  [Breakpoints.XXL]: '1280px', // Bigger than XL
  [Breakpoints.XXXL]: '1600px' // Bigger than XXL
};

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
  name: string;
  gridColumn: ResponsiveSetting<string> | string;
  justifySelf?: ResponsiveSetting<Alignment> | Alignment;
  justifyContent: ResponsiveSetting<Alignment> | Alignment;
  visibility?: ResponsiveSetting<boolean>;
  transformer: Transformer;
  items: ClickableConfig[];
};

export type GlobalNavigationRowConfig = {
  columns?: string;
  justifyItems?: Alignment;
  justifyContent?: Alignment;
  visibility: ResponsiveSetting<boolean>; // Could be expanded into a more complex type for handling breakpoints
  sticky?: ResponsiveSetting<boolean>;
  areas: ClickableAreaConfig[];
};

export type GlobalNavigationConfig = {
  rows: GlobalNavigationRowConfig[];
};
