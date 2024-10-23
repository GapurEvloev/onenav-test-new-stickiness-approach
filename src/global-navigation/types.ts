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
  [Breakpoints.SM]: '0px',
  [Breakpoints.MD]: '320px',
  [Breakpoints.LG]: '768px',
  [Breakpoints.XL]: '1024px',
  [Breakpoints.XXL]: '1280px',
  [Breakpoints.XXXL]: '1600px'
};

export const mediaQueries: Record<Breakpoints, string> = {
  [Breakpoints.SM]: `(min-width: ${breakpointSizes[Breakpoints.SM]})`,
  [Breakpoints.MD]: `(min-width: ${breakpointSizes[Breakpoints.MD]})`,
  [Breakpoints.LG]: `(min-width: ${breakpointSizes[Breakpoints.LG]})`,
  [Breakpoints.XL]: `(min-width: ${breakpointSizes[Breakpoints.XL]})`,
  [Breakpoints.XXL]: `(min-width: ${breakpointSizes[Breakpoints.XXL]})`,
  [Breakpoints.XXXL]: `(min-width: ${breakpointSizes[Breakpoints.XXXL]})`
};

export type VisibilityOptions = boolean | 'none' | 'flex' | 'grid' | 'block' | 'inline';

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

type Source =
  | 'primaryLinks'
  | 'secondaryLinks'
  | 'contactLinks'
  | 'noticesLinks'
  | 'subchannelLinks'
  | 'utilityLinks'
  | 'accountLinks';

type ItemDefaults = {
  variant?: Variant;
  type?: string;
  as?: string;
};

type Transformer = {
  source?: Source;
  strategy: string; // for future, tbd - could be a union of possible strategies
  itemDefaults: ItemDefaults;
  type?: string;
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
  transformer?: Transformer;
  items: ClickableConfig[];
  id?: string;
  className?: string;
};

export type GlobalNavigationRowConfig = {
  columns?: ResponsiveSetting<string> | string;
  visibility?: ResponsiveSetting<VisibilityOptions> | VisibilityOptions;
  hideOnScroll: ResponsiveSetting<boolean | number> | boolean | number;
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

export type Navigation = {
  //  primaryLinks?: PrimaryLinks[];
};
/*
export type PrimaryLinks = {
  showInTopNav?: boolean,
  text?: string,
  url?: string,
  isActive?: boolean,
  isExternal?: boolean,
  forceLeftOfNav?: boolean,
}
*/

export type GlobalNavigationConfig = {
  rows: GlobalNavigationRowConfig[];
  navigation?: Navigation[];
};


// new try
export type Stickiness = boolean | number;

export type RowConfig = {
  stickiness: Stickiness;
  content: React.ReactNode;
}