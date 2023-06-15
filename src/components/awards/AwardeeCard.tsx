import React from "react";
import Image from "next/image";

/** TODO maybe add a hyperlink to every awardee?
 * but currently there's no such desc
 * so I'll leave it for future dev
 */

export const AwardeeCard = ({
  awardeeName,
  awardYear,
  profileImg,
  altDesc,
  width,
  height,
}: {
  awardeeName: string;
  awardYear: number | undefined;
  // awardee profile image path
  profileImg: string;
  // alternative image description
  altDesc: string;
  // width & height of profile picture (px)
  width: number;
  height: number;
}) => {
  return (
    <div className={"flex flex-col items-center justify-end"}>
      <Image
        src={profileImg}
        alt={altDesc}
        width={width}
        height={height}
        layout="fixed"
      />
      <p className={"font-semibold mt-1.5 w-max"}>{awardeeName}</p>
      {awardYear && <p className={"-mt-1"}>{awardYear}</p>}
    </div>
  );
};
