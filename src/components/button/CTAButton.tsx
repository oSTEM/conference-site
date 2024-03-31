import styles from './CTAButton.module.css';

/**
 * A button that invokes a call to action.
 *
 * This button is rendered semantically (i.e., the underlying HTML) as either a
 * hyperlink (<a />) or button, depending on the value passed to onClick.
 */
export const CTAButton = ({
  children,
  disabled,
  onClick,
  backgroundColor = 'antique-teal',
  target = '_blank',
}: {
  // The label for the button.
  children: string;

  // If true, the button is rendered in a disabled state and is not clickable.
  disabled?: boolean;

  // The action to take when clicking the button.
  // If a string, the button serves as a hyperlink; if a function, the button
  // executes the function.
  onClick: string | (() => void);

  // Additional classes to apply to the button element.
  backgroundColor: string;
  fontSize?: string;
  // Open this link in current tab (_self) or a new tab (_blank)
  target: '_self' | '_blank';
}) => {
  const commonProps = {
    'className': styles.CTAButton,
    'data-disabled': disabled,
  };

  let bgStyle = {
    backgroundColor: `var(--color-${backgroundColor})`,
  };

  const button = (() => {
    if (typeof onClick === 'string') {
      // console.log('css', buttonStyle);
      return (
        <a
          {...commonProps}
          href={disabled ? undefined : onClick}
          target={target}
          style={bgStyle}
        >
          <span>{children}</span>
        </a>
      );
    }
    return (
      <button
        {...commonProps}
        onClick={onClick}
        disabled={disabled}
        style={bgStyle}
      >
        <span>{children}</span>
      </button>
    );
  })();

  return <>{button}</>;
};
