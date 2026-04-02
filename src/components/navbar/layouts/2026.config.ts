/**
 * Navbar.config.ts
 *
 * Edit this file to change what links are shown in the navbar.
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */
import type { NavbarCategory, NavbarLink } from '../NavbarCore';

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
    label: 'Registration',
    href: '/2026/attend/registration',
    badge: {
      label: 'Coming Soon',
      accent: false,
    },
  },
  {
    category: 'attend',
    label: 'Collegiate Grants',
    href: '/2026/attend/collegiate-grants',
    badge: {
      label: 'Coming Soon',
      accent: false,
    },
  },
  {
    category: 'attend',
    label: 'Attendee Logistics',
    href: '/2026/attend/logistics',
  },
  {
    category: 'attend',
    label: 'What to Expect',
    href: '/2026/attend/about',
  },
  {
    category: 'attend',
    label: 'Schedule',
    href: '/2026/attend/schedule',
  },
  {
    category: 'present',
    label: 'Request for Programs',
    href: '/2026/present/request-for-programs',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'present',
    label: 'Request for Panelists',
    href: '/2026/present/request-for-panelists',
    badge: {
      label: 'Closed',
      accent: false,
    },
  },
  {
    category: 'present',
    label: 'Call for Posters',
    href: '/2026/present/call-for-posters',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'partner',
    label: 'Exhibitors and Sponsors',
    href: '/2026/partner/exhibitors-and-sponsors',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'misc',
    label: 'Annual Awards',
    href: '/2026/awards',
  },
  {
    category: 'misc',
    label: 'Community Health & Safety',
    href: '/2026/health-and-safety',
  },
  {
    category: 'misc',
    label: '2025 Conference Archive',
    href: '/archive/2025',
  },
];
