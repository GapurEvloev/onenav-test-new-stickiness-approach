import React, { ElementType } from 'react';
import { StyledClickable } from './styles';

type ClickableOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  variant?: 'simple-clickable' | 'logo' | 'divider';
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
};

type ClickableProps<E extends ElementType> = ClickableOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ClickableOwnProps>;

const defaultElement = 'button';

const Clickable = <E extends ElementType = typeof defaultElement>({
  as,
  variant,
  children,
  onClick,
  primary,
  secondary,
  ...restProps
}: ClickableProps<E>) => {
  const TagName = as || defaultElement;
  return (
    <StyledClickable
      as={TagName}
      variant={variant}
      primary={primary}
      secondary={secondary}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </StyledClickable>
  );
};

export default Clickable;
