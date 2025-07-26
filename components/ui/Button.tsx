import React from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

// Define own props for the Button, not related to HTML attributes initially
interface MyButtonOwnProps {
  children: React.ReactNode;
  className?: string;
}

// Define types for what 'as' can be and their specific props
// Props for when the component is a standard HTML button
type ButtonAsButtonProps = MyButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  to?: undefined; // 'button' does not use 'to'
  href?: undefined; // 'button' does not use 'href'
};

// Props for when the component is an HTML anchor tag
type ButtonAsAnchorProps = MyButtonOwnProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  to?: undefined; // 'a' uses 'href', not 'to'
  // 'href' is part of React.AnchorHTMLAttributes<HTMLAnchorElement>
};

// Props for when the component is a React Router Link
type ButtonAsLinkProps = MyButtonOwnProps &
  Omit<ReactRouterLinkProps, 'className' | 'children'> & { // Omit to avoid conflicts, they are in MyButtonOwnProps
  as: typeof ReactRouterLink;
  href?: undefined; // React Router Link uses 'to', not 'href'
  // 'to' is part of ReactRouterLinkProps
};

// Union of all possible props for the Button component
export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;


export const Button: React.FC<ButtonProps> = ({
  children,
  className, // This will now be for ADDITIONAL classes or OVERRIDES
  as: Component = 'button',
  ...props
}) => {
  // Base structural and behavioral classes (sizing, flex, cursor, etc.)
  // Default h-10, px-4, text-sm. These can be overridden by the className prop.
  const structuralClasses = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-colors";

  // Default appearance classes (background, text color, hover effects)
  const appearanceClasses = "bg-[#4747ea] text-[#f8f8fc] hover:bg-[#3a3ad5]";

  // Combine structural, default appearance, and then any custom/override classes.
  // Tailwind applies the last conflicting utility class in a string.
  const combinedClassName = `${structuralClasses} ${appearanceClasses} ${className || ''}`.trim().replace(/\s+/g, ' ');


  if (Component === 'a') {
    return (
      <a
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span className="truncate">{children}</span>
      </a>
    );
  }

  if (Component === ReactRouterLink) {
    return (
      <ReactRouterLink
        className={combinedClassName}
        {...(props as Omit<ReactRouterLinkProps, 'className' | 'children'>)}
      >
        <span className="truncate">{children}</span>
      </ReactRouterLink>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};