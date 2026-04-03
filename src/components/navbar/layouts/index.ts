import type { NavbarCategory, NavbarLink } from '../NavbarCore';
import {
  NAVBAR_CATEGORIES as NAVBAR_CATEGORIES_2024,
  NAVBAR_LINKS as NAVBAR_LINKS_2024,
} from './2024.config';
import {
  NAVBAR_CATEGORIES as NAVBAR_CATEGORIES_2025,
  NAVBAR_LINKS as NAVBAR_LINKS_2025,
} from './2025.config';
import {
  NAVBAR_CATEGORIES as NAVBAR_CATEGORIES_2026,
  NAVBAR_LINKS as NAVBAR_LINKS_2026,
} from './2026.config';

interface NavbarLayoutConfig {
  categories: NavbarCategory[];
  links: NavbarLink[];
}

function withArchivePrefix(links: NavbarLink[], year: number): NavbarLink[] {
  const prefix = `/archive/${year}/`;
  return links.map((link) => {
    if (link.href.startsWith('/')) {
      return link;
    }

    const normalizedHref = link.href.replace(/^\/+/, '');
    return {
      ...link,
      href: `${prefix}${normalizedHref}`,
    };
  });
}

const NAVBAR_LAYOUT_BY_YEAR: Record<number, NavbarLayoutConfig> = {
  2024: {
    categories: NAVBAR_CATEGORIES_2024,
    links: withArchivePrefix(NAVBAR_LINKS_2024, 2024),
  },
  2025: {
    categories: NAVBAR_CATEGORIES_2025,
    links: withArchivePrefix(NAVBAR_LINKS_2025, 2025),
  },
  2026: {
    categories: NAVBAR_CATEGORIES_2026,
    links: NAVBAR_LINKS_2026,
  },
};

export function hasNavbarLayout(year: number): boolean {
  return Boolean(NAVBAR_LAYOUT_BY_YEAR[year]);
}

export const DEFAULT_NAVBAR_LAYOUT_YEAR = 2026;

export function getNavbarLayout(year?: number): NavbarLayoutConfig {
  if (typeof year === 'number' && NAVBAR_LAYOUT_BY_YEAR[year]) {
    return NAVBAR_LAYOUT_BY_YEAR[year];
  }

  if (typeof year === 'number') {
    if (process.env.NODE_ENV !== 'production') {
      console.info(
        `[Navbar] Year ${year} does not have a navbar, using default fallback.`,
      );
    }
    return { categories: [], links: [] };
  }

  return NAVBAR_LAYOUT_BY_YEAR[DEFAULT_NAVBAR_LAYOUT_YEAR];
}
