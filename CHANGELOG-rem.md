## 0.2.0 - Tech Stack Upgrades
Major Breaking Changes: 
- Upgraded `next` from 10.2.3 to 12.3.4
- Completely removed `styled-jsx`. Converted components that were previously using it to use native CSS modules
- Migrated `next.config.js` to CommonJS based `next.config.mjs`
  - This also allowed upgrading `remark-gfm` from 1.0.0 to 3.0.1
- Removed `_reset.css`
  - Was causing trouble overwriting our CSS, didn't see it really being used so I took it out alltogether

Minor Changes:
- Upgraded `typescript` from 4.1.5 to 4.9.5
- Bumped `react` and `react-dom` from 17.0.1 to 17.0.2
- Removed Noto Sans as the default font (it no longer works, the font is no longer on Google Fonts) and replaced it with system default fonts