/**
 * NavbarConfig.ts
 *
 * Edit this file to change what links are shown in the navbar.
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */
import { NavbarCategory, NavbarLink } from './NavbarCore';

/**
 * This object specifies what categories are used in the header dropdowns (desktop) and sidebar lists (tablet/mobile).
 * Required properties: name, displayName, color
 */
export const NAVBAR_CATEGORIES: NavbarCategory[] = [
  {
    name: 'attend',
    displayName: 'Attend',
    color: 'green-700',
  },
  {
    name: 'present',
    displayName: 'Present',
    color: 'blue-600',
  },
  {
    name: 'partner',
    displayName: 'Partner',
    color: 'violet-600',
  },
  {
    name: 'misc',
    displayName: 'More',
    color: 'pink-600',
  },
];

/**
 * This object specifies what links are available and what categories they should be put under.
 * Required properties: category, label, href
 * You can optionally add a badge property.
 */
export const NAVBAR_LINKS: NavbarLink[] = [
  {
    category: 'attend',
    label: 'Registration',
    href: '/2023/registration',
    badge: {
      label: 'Opens June',
    },
  },
  {
    category: 'attend',
    label: 'Attendee Resources',
    href: '/2023/attendee-guide',
  },
  {
    category: 'attend',
    label: 'Schedule',
    href: '/2023/schedule',
  },
  {
    category: 'present',
    label: 'Request for Programs',
    href: '/2024/rfp',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'present',
    label: 'Call for Posters',
    href: '/2023/cfp',
    badge: {
      label: 'Not Yet Open',
    },
  },
  {
    category: 'partner',
    label: 'Exhibition and Sponsorship',
    href: '/2024/partnership',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'partner',
    label: 'Previous Exhibitors',
    href: '/2024/previous-exhibitors',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'misc',
    label: 'Annual Awards',
    href: '/2023/awards',
  },
];
