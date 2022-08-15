import css from "styled-jsx/css";

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
  backgroundColor = "antique-teal",
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
}) => {
  const buttonStyle = css.resolve`
    --bg: black;
    --bg-active: #111111;
    --bg-disabled: #666666;
    --text: white;
    --text-active: white;
    --text-disabled: white;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: var(--font-display);
    line-height: 1.3em;
    position: relative;
    padding: var(--padding, 0.5em 1.5em);
    color: var(--text);
    font-size: 1.1em;
    font-weight: bold;
    text-decoration: none;
    background-color: var(--color-${backgroundColor});
    border-radius: 999px;
    transition: background-color 0.15s, border-color 0.15s, color 0.15s,
      box-shadow 0.15s;
    outline: none;
    cursor: pointer;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.3);

    :not([data-disabled="true"]):hover,
    :focus {
      background-color: var(--color-ostem-darkblue);
      box-shadow: -2px 5px 4px rgba(0, 0, 0, 0.4);
    }

    :disabled,
    [data-disabled="true"] {
      background-color: var(--bg-disabled);
      cursor: not-allowed;
    }

    /* outer focus ring */
    :after {
      content: "";
      transition: box-shadow 0.15s;
      margin: -4px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      border-radius: 999px;
    }
    :focus:after {
      box-shadow: 0 0 0 2px var(--bg-active);
    }

    & :global(.icon) {
      margin-right: 0.5em;
    }
  `;

  const commonProps = {
    "className": buttonStyle.className,
    "data-disabled": disabled,
  };

  const button = (() => {
    if (typeof onClick === "string") {
      return (
        <a
          {...commonProps}
          href={disabled ? undefined : onClick}
          target="_blank"
        >
          <span>{children}</span>
        </a>
      );
    }
    return (
      <button {...commonProps} onClick={onClick} disabled={disabled}>
        <span>{children}</span>
      </button>
    );
  })();

  return (
    <>
      {button}
      {buttonStyle.styles}
    </>
  );
};
