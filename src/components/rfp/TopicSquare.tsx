import React from "react";

/**
 * A topic in the RFP page.
 *
 * @todo
 *    I like the idea of incorporating color into this, but finding it somewhat
 *    hard to do in a way that looks good. Background colors is too much for
 *    sure. I like the colorful borders better, but it's still not quite right
 *    I think. Not sure what best thing to do is here.
 */
export const TopicSquare = ({
  borderColor = "border-red-500",
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
  borderColor: string;
}) => {
  return (
    <div
      // note: we set a min-height because the "Other Relevant Topics" square
      // looks a little wimpy without it
      className={`border-solid pl-4 border-l-8 ${borderColor} flex flex-col min-h-[12rem] py-2 my-4`}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};
