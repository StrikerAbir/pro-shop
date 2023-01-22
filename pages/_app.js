import { Provider } from "react-redux";
import Layout from "../all_structure/Layout/Layout";
import store from "../all_structure/redux/app/store";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <div data-theme="light">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    );
  }
  return (
    <div data-theme="light">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
