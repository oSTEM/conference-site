import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialRow = () => {
  return (
    <div className={"flex flex-wrap p-4 gap-4"}>
      <SocialIcon
        label="Twitter"
        icon={faTwitter}
        href={"https://twitter.com/outinstem"}
      />
      <SocialIcon
        label="LinkedIn"
        icon={faLinkedin}
        href={"https://www.linkedin.com/company/ostem"}
      />
      <SocialIcon
        label="Instagram"
        icon={faInstagram}
        href={"https://www.instagram.com/ostem.global/"}
      />
      <SocialIcon
        label="GitHub"
        icon={faGithub}
        href={"https://github.com/ostem"}
      />
    </div>
  );
};

interface SocialIconProps {
  icon: typeof faGithub;
  href: string;
  label: string;
}

const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  return (
    <>
      <a href={href} aria-label={label}>
        <FontAwesomeIcon icon={icon} className={"social-icon"} fixedWidth />
      </a>
      <style jsx>
        {`
          a {
            color: inherit;
            font-size: 2rem;
            display: block;
          }
        `}
      </style>
    </>
  );
};
