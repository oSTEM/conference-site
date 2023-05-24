import React from "react";
import { css } from "styled-jsx/css";
import { Color } from "theme/Color";

/**
 * Generate a card component for each award
 * Display award name, description, two buttons
 */
export const AwardCard = ({
  borderColor = "border-red-500",
  title,
  desc,
  elig,
  alert,
}: {
  borderColor: string;
  buttonColor: string;
  title: string;
  desc: string;
  elig: Array<string>;
  // text alert
  alert?: string;
}) => {
  return (
    <div
      className={`border-solid px-4 py-2 my-4 border-4 ${borderColor} flex flex-col `}
    >
      <h3 className={"font-bold"}>{title}</h3>
      <p>{desc}</p>
      <h4>Eligibility:</h4>
      <ul>
        {elig?.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      {alert && (
        <p className={"text-sm italic my-1 text-gray-500"}>{"* " + alert}</p>
      )}
      <div className="flex flex-row mt-2">
        <AwardCardButton>View Previous Awardees</AwardCardButton>
        <AwardCardButton>Nominate Someone for this Award</AwardCardButton>
      </div>
    </div>
  );
};

const AwardCardButton = ({
  children,
  disabled = false,
  url,
}: {
  // the label for the button
  children: string;
  // if this button should be disabled
  disabled?: boolean;
  // the hyperlink to another page
  url?: string;
}) => {
  const buttonStyle = css.resolve`
    --bg: black;
    --bg-active: #111111;
    --bg-disabled: #666666;
    --text: white;
    --text-active: white;
    --text-disabled: white;

    margin-right: 10px;

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
    font-weight: normal;
    text-decoration: none;
    background-color: var(--color-frost);
    border-radius: 1px;
    transition: background-color 0.15s, border-color 0.15s, color 0.15s,
      box-shadow 0.15s;

    :hover,
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
      border-radius: 1px;
    }
    :focus:after {
      box-shadow: 0 0 0 2px var(--bg-active);
    }

    & :global(.icon) {
      margin-right: 0.5em;
    }
  `;

  const commonProps = {
    className: buttonStyle.className,
  };

  const button = (() => {
    return (
      <button {...commonProps}>
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
