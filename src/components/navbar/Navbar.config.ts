/**
 * Navbar.config.ts
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
  /**
   *  name: 'attend',
   *  displayName: 'Attend',
   *  color: 'nav-green',
   *},
   *{
   *  name: 'present',
   *  displayName: 'Present',
   *  color: 'nav-blue',
   *},
   */
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
  /** {
  *   category: 'attend',
  *   label: 'Registration',
  *   href: '/2025/attend/registration',
  *   badge: {
  *     label: 'Onsite Only',
  *   },
  * },
  * {
  *   category: 'attend',
  *   label: 'Attendee Resources',
  *   href: '/2025/attend/resources',
  * },
  * {
  *   category: 'attend',
  *   label: 'Schedule',
  *   href: '/2025/attend/schedule',
  * },
  * {
  *   category: 'attend',
  *   label: 'Career Fair & Grad Expo',
  *   href: '/2025/attend/expo',
  * },
  * {
  *   category: 'attend',
  *   label: 'Community Health & Safety',
  *   href: '/2025/attend/health-and-safety',
  * },
  * {
  *   category: 'present',
  *   label: 'Request for Programs',
  *   href: '/2025/present/request-for-programs',
  *   badge: {
  *     label: 'Closed',
  *   },
  * },
  * {
  *   category: 'present',
  *   label: 'Request for Panel Topics',
  *   href: '/2025/present/request-for-panel-topics',
  *   badge: {
  *     label: 'Closed',
  *   },
  * },
  * {
  *   category: 'present',
  *   label: 'Call for Posters',
  *   href: '/2025/present/call-for-posters',
  *   badge: {
  *     label: 'Closed',
  *   },
  * },,
  {
    category: 'partner',
    label: 'Exhibitor/Sponsor Resources',
    href: '/2025/partner/resources',
  }, */
  {
    category: 'partner',
    label: 'Exhibitors and Sponsors',
    href: '/2025/partner/exhibitors-and-sponsors',
    badge: {
      label: 'Open',
      accent: true,
    },
  },
  {
    category: 'misc',
    label: 'Annual Awards',
    href: '/2025/awards',
  },
  /**{
    category: 'misc',
    label: "What's New?",
    href: '/2025/whats-new',
  },*/
];
