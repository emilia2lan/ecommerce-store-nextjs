import { css, Global } from '@emotion/react';

const myGlobalStyles = css`
  body {
    body {
      font-family: Helvetica, sans-serif;
      font-weight: 300;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-style: italic;
    }
  }
`;

export const globalStyles = <Global styles={myGlobalStyles} />;
