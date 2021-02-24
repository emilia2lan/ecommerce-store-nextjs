import { globalStyles } from '../shared/globalStyles.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
