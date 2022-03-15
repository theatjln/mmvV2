import "../styles/index.scss"; // in the crash course this file is style.scss

import "@fortawesome/fontawesome-free/css/all.css";

// every component in the app will pass through here
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
