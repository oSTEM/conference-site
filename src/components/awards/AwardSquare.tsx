import React from "react";

/**
 * Adapt Topic Square from RFP components
 * This component is designed to display a list of awards under each section
 */
export const AwardSquare = ({
  borderColor = "border-red-500",
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title: string;
  borderColor: string;
  href: string;
}) => {
  return (
    <div
      className={`border-solid pl-4 border-l-8 ${borderColor} flex flex-col min-h-[10rem] py-2 my-4`}
    >
      <a href={href}>
        <h3>{title}</h3>
      </a>
      {children}
    </div>
  );
};
