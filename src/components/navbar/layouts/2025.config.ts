/**
 * Navbar.config.ts - 2025 Archive
 *
 * Edit this file to change what links are shown in the navbar.
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */
import type {
  NavbarCategory,
  NavbarLink,
} from '@/components/navbar/NavbarCore';

/**
 * This object specifies what categories are used in the header dropdowns (desktop) and sidebar lists (tablet/mobile).
 * Required properties: name, displayName, color
 */
export const NAVBAR_CATEGORIES: NavbarCategory[] = [
  {
    name: 'attend',
    displayName: 'Attend',
    color: 'nav-green',
  },
  {
    name: 'present',
    displayName: 'Present',
    color: 'nav-blue',
  },
  {
    name: 'partner',
    displayName: 'Partner',
    color: 'nav-purple',
  },
  {
    name: 'misc',
    displayName: 'More',
    color: 'nav-pink',
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
    label: 'Attendee Resources',
    href: '/archive/2025/attend/resources',
  },
  {
    category: 'attend',
    label: 'Collegiate Resources',
    href: '/archive/2025/attend/collegiate-resources',
  },
  {
    category: 'attend',
    label: 'Registration',
    href: '/archive/2025/attend/registration',
    badge: {
      label: 'Closed',
      accent: false,
    },
  },
  {
    category: 'attend',
    label: 'Schedule',
    href: '/archive/2025/attend/schedule',
  },
  {
    category: 'attend',
    label: 'What to Expect',
    href: '/archive/2025/attend/about',
  },
  {
    category: 'present',
    label: 'Request for Programs',
    href: '/archive/2025/present/request-for-programs',
    badge: {
      label: 'Closed',
      accent: false,
    },
  },
  {
    category: 'present',
    label: 'Request for Panelists',
    href: '/archive/2025/present/request-for-panelists',
    badge: {
      label: 'Closed',
      accent: false,
    },
  },
  {
    category: 'present',
    label: 'Call for Posters',
    href: '/archive/2025/present/call-for-posters',
    badge: {
      label: 'Closed',
      accent: false,
    },
  },
  {
    category: 'partner',
    label: 'Exhibitors and Sponsors',
    href: '/archive/2025/partner/exhibitors-and-sponsors',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'misc',
    label: 'Annual Awards',
    href: '/archive/2025/awards',
  },
  {
    category: 'misc',
    label: 'Community Health & Safety',
    href: '/archive/2025/health-and-safety',
  },
];

/**
 * {
 *   category: 'attend',
 *   label: 'Career Fair & Grad Expo',
 *   href: 'attend/expo',
 * },
 *{
 *  category: 'partner',
 *  label: 'Exhibitor/Sponsor Resources',
 *  href: 'partner/resources',
 *}, */
/**{
 *  category: 'misc',
 *  label: "What's New?",
 *  href: 'whats-new',
 *},*/
