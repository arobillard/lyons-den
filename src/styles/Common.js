import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`

  :root {
    --color-primary: #ac304d;
    --color-primary-alt: #c5404f;
    --color-secondary: #e7a778;
    --color-accent-1: #8ac8d0;
    --color-accent-2: #827472;

    --font-primary: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-secondary: "Merriweather", "Georgia", Cambria, "Times New Roman", Times,
      serif;

    --wrapper: min(65rem, 100%);
  }

  html {
    font-family: var(--font-primary);
  }

`;

export default Common;
