/**
 * NavbarConfig.ts
 *
 * Edit this file to change what links are shown in the navbar.
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */
import { NavbarCategory, NavbarLink } from "./NavbarCore";

/**
 * This object specifies what categories are used in the header dropdowns (desktop) and sidebar lists (tablet/mobile).
 * Required properties: name, displayName, color
 */
export const NAVBAR_CATEGORIES: NavbarCategory[] = [
  {
    name: "attend",
    displayName: "Attend",
    color: "green-500",
  },
  {
    name: "present",
    displayName: "Present",
    color: "blue-500",
  },
];

/**
 * This object specifies what links are available and what categories they should be put under.
 * Required properties: category, label, href
 * You can optionally add a badge property.
 */
export const NAVBAR_LINKS: NavbarLink[] = [
  {
    category: "attend",
    label: "Register",
    href: "/2024/register",
    badge: {
      label: "Opens June",
    },
  },
  {
    category: "present",
    label: "Request for Programs",
    href: "/2024/rfp",
  },
];
