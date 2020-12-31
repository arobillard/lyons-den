import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  dd,
  figure,
  blockquote,
  details,
  hr,
  fieldset,
  pre,
  table,
  caption,
  menu {
    margin: 0 0 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.3;
  }

  h1,
  .heading-1,
  .scale-1 {
    font-size: 2.488rem;
  }

  h2,
  .heading-2,
  .scale-2 {
    font-size: 2.074rem;
  }

  h3,
  .heading-3,
  .scale-3 {
    font-size: 1.728rem;
  }

  h4,
  .heading-4,
  .scale-4 {
    font-size: 1.44rem;
  }

  h5,
  .heading-5,
  .scale-5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  h1,
  .heading-1 {
    color: var(--color-primary);
  }

  small,
  .text-small {
    font-size: 0.833rem;
  }

  @media only screen and (min-width: 38em) {
    h1,
    .heading-1,
    .scale-1 {
      font-size: 4.209rem;
    }

    h2,
    .heading-2,
    .scale-2 {
      font-size: 3.157rem;
    }

    h3,
    .heading-3,
    .scale-3 {
      font-size: 2.369rem;
    }

    h4,
    .heading-4,
    .scale-4 {
      font-size: 1.777rem;
    }

    h5,
    .heading-5,
    .scale-5 {
      font-size: 1.333rem;
    }

    small,
    .text_small {
      font-size: 0.75rem;
    }
  }

`;

export default Typography;
